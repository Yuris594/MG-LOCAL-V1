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