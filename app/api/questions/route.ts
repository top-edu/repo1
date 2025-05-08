import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { middleware } from "../tools/middleware";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const headers = middleware(request);
  if (request.method === "OPTIONS") {
    // Handle preflight OPTIONS request
    return new NextResponse(null, {
      status: 204,
      headers,
    });
  }

  const questions = await prisma.questions.findMany({ take: 10 });

  return new NextResponse(JSON.stringify({ questions }), {
    status: 200,
    headers,
  });
}
