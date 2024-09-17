import { NextResponse } from 'next/server';

export function middleware(request) {
  const authTokens = request.cookies.get("authTokens")?.value;

 
  if (request.nextUrl.pathname.startsWith("/start") && !authTokens) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  
  if (authTokens && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/start', request.url));
  }

  
  if (authTokens && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/start', request.url));
  }
}

export const config = {
  matcher: ['/start(.*)', '/'],
}