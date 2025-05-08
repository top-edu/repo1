import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { middleware } from "../middleware";

export async function POST(request: NextRequest) {
  const headers = middleware(request);
  if (request.method === "OPTIONS") {
    // Handle preflight OPTIONS request
    return new NextResponse(null, {
      status: 204,
      headers,
    });
  }

  const body: { amount: number } = await request.json();
  const { amount = 1 } = body;

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  return new NextResponse(JSON.stringify({ data: amount }), {
    status: 200,
    headers,
  });
}
