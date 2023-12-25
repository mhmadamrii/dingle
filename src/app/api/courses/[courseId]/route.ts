import { NextResponse, NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs';
import { db } from '~/lib/db';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', {
        status: 401,
      });
    }

    const course = await db.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json({ message: 'Success!' });
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal server error', {
      status: 500,
    });
  }
}
