import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const ip = request.headers.get("CF-Connecting-IP");
    const country = request.headers.get("CF-IPCountry");
    const url = JSON.stringify(request.url);
    const userAgent = JSON.stringify(request.headers.get("user-agent"));
    const statusCode = NextResponse.next().status;
    const method = request.method;

    // let location;
    // try {
    //     location = await getIPGeoLocation("24.112.145.126");
    // } catch (error) {
    //     console.error("Error fetching location: ", error);
    // }

    console.log(
        `${method} ${statusCode} ${url} User Agent:${userAgent} IP:${ip} Country:${country} \n`
    );
}
