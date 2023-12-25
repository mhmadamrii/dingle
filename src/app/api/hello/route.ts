import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'Hello world' });
  } catch (error) {
    console.log('error', error);
    return new NextResponse('failed', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { data } = await req.json();

    return NextResponse.json({ data });
  } catch (error) {
    throw new NextResponse(
      'Something illegal happened here',
      { status: 500 },
    );
  }
}
