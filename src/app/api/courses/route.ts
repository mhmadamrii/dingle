import { auth } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import { db } from '~/lib/db';
import { isTeacher } from '~/lib/teacher';

export async function POST(req: Request) {
  const reql = await req.json();
  try {
    const { userId } = auth();
    console.log('user id', userId);

    if (!userId) {
      throw new NextResponse('Unauthenticated', {
        status: 400,
      });
    }
    const course = await db.course.create({
      data: { title: reql.title, userId: userId },
    });

    revalidatePath('/teacher/courses');
    return NextResponse.json({
      message: 'Hello success',
      result: course,
    });
  } catch (error) {
    console.log('errors', error);
    return new NextResponse('Internal error', {
      status: 500,
    });
  }
}
