
import { NextResponse } from "next/server";

const allowedOrigins = [
  'https://zlatovlas-delta-notes.shuttleapp.rs', 
];

export function middleware() {
    // retrieve the current response
    const res = NextResponse.next()

    // add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', "true")
    res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.headers.append('Access-Control-Allow-Origin', "https://zlatovlas-delta-notes.shuttleapp.rs")

    return res
}

// specify the path regex to apply the middleware to
export const config = {
    matcher: '/:path*',
}
