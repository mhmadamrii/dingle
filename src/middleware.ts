import { authMiddleware } from '@clerk/nextjs';
import createMiddleware from 'next-intl/middleware';


export function middleware() {
  authMiddleware({
    publicRoutes: ['/api/uploadthing'],
  });


  createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'id'],
    // Used when no locale matches
    defaultLocale: 'en'
  });
}


export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    '/', '/(id|en)/:path*'
  ],
};