import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ['https://www.topedu.com.au/', 'http://localhost:3000'];

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  const isAllowed = allowedOrigins.includes(origin);

  const headers = {
    'Access-Control-Allow-Origin': isAllowed ? origin : '',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Handle preflight OPTIONS request
//   if (request.method === 'OPTIONS') {
//     return new NextResponse(null, {
//       status: 204,
//       headers,
//     });
//   }

  return headers;
}