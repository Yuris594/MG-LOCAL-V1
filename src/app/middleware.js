/*import { NextResponse } from "next/server";

export function middleware (request) {
    const authTokens = request.cookies.get("authTokens")?.value;

    if (request.nextUrl.pathname.startsWith("/pages/start") && !authTokens) {
        const response = NextResponse.redirect(new URL("/", request.url));
        response.cookies.delete("authTokens");
        return response;
    }

    if (authTokens && request.nextUrl.pathname.startsWith("/")) {
        const response = NextResponse.redirect(new URL("/pages/start", request.url));
        return response;
    }
}

export const config = {
    matcher: ["/pages(.*)", "/"]
}*/

import { NextResponse } from 'next/server'
 
const allowedOrigins = ['http://172.20.20.3:8001', 'http://172.20.100.110']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
 
export function middleware(request) {
  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)
 
  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'
 
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }
 
  // Handle simple requests
  const response = NextResponse.next()
 
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
 
  return response
}
 
export const config = {
  matcher: '/api/:path*',
}