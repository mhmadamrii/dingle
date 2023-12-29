import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { db } from '~/lib/db';

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  console.log('function triggered');
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) {
      return new NextResponse('There is no course', {
        status: 404,
      });
    }

    const hasPublishedChapter = course.chapters.some(
      (chapter) => chapter.isPublished,
    );

    if (
      !course.title ||
      !course.description ||
      !course.imageUrl ||
      !course.categoryId ||
      !hasPublishedChapter
    ) {
      return new NextResponse('Missing required fields', {
        status: 404,
      });
    }

    const publishedCourse = await db.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        isPublished: true,
      },
    });
    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.log('error', error);
    return new NextResponse('Internal Server error', {
      status: 500,
    });
  }
}
