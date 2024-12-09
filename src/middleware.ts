// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthPath = req.nextUrl.pathname.startsWith('/auth');

  // Log the token and path for debugging purposes
  console.log(`Token: ${token}, Path: ${req.nextUrl.pathname}`);

  // Allow requests to certain paths without authentication
  if (
    req.nextUrl.pathname.startsWith('/_next/') ||
    req.nextUrl.pathname.startsWith('/api/') ||
    req.nextUrl.pathname.startsWith('/styles/') ||
    req.nextUrl.pathname.startsWith('/public/') ||
    req.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Redirect to sign-in if no token is present and the user is trying to access a protected route
  if (!token && !isAuthPath) {
    const signInUrl = new URL('/signin', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Redirect authenticated users away from the auth pages
  if (token && isAuthPath) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Custom authorization logic for specific paths
  if (token) {
    const { role } = token as any;
    const { pathname } = req.nextUrl;

    // Check if the user is trying to access the admin path
    if (pathname.startsWith('/SuperAdmin') && role !== 'SuperAdmin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  return NextResponse.next();
}

// Export next-auth middleware as default
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/SuperAdmin', '/profile', '/protected/:path*'],
};
