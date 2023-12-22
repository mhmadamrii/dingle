import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'Hello world' });
  } catch (error) {
    console.log('error', error);
    return new NextResponse('failed', { status: 500 });
  }
}
