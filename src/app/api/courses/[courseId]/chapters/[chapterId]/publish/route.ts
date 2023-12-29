import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import { db } from '~/lib/db';

export async function PATCH(
  req: Request,
  {
    params,
  }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const { userId } = auth();

    if (!userId) {
      console.log('none user');
      return new NextResponse('Unauthorized Shit', {
        status: 401,
      });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
      // include: {
      //     chapters: {
      //         include: {
      //             muxData: true,
      //         }
      //     }
      // }
    });

    if (!ownCourse) {
      return new NextResponse('Not found', { status: 404 });
    }

    const chapter = await db.chapter.findUnique({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
    });

    const muxData = await db.muxData.findUnique({
      where: {
        chapterId: params.chapterId,
      },
    });

    if (
      !chapter ||
      !muxData ||
      !chapter.title ||
      !chapter.description ||
      !chapter.videoUrl
    ) {
      return new NextResponse('Missing required fields', {
        status: 400,
      });
    }

    const publishedChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedChapter);

    // const hasPublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

    // if (!course.title || !course.description || !course.imageUrl || !course.categoryId) {
    //     return new NextResponse("Missing required fields", { status: 401 });
    // }

    // const publishedCourse = await db.course.update({
    //     where: {
    //         id: params.courseId,
    //         userId,
    //     },
    //     data: {
    //         isPublished: true,
    //     }
    // });

    // return NextResponse.json(publishedCourse);
  } catch (error) {
    console.log('[COURSE_ID_PUBLISH]', error);
    return new NextResponse('Internal Error', {
      status: 500,
    });
  }
}
