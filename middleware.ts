import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    if (process.env.NODE_ENV === "development") return;

    const ip = request.headers.get("CF-Connecting-IP");
    const country = request.headers.get("CF-IPCountry");
    const url = JSON.stringify(request.url);
    const userAgent = JSON.stringify(request.headers.get("user-agent"));
    const statusCode = NextResponse.next().status;
    const method = request.method;
    const timestamp = Date().toLocaleString();

    console.log(
        `${method} ${statusCode} ${url} User Agent:${userAgent} IP:${ip} Country:${country} - ${timestamp} \n`
    );
}
