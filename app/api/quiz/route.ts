import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { middleware } from "../tools/middleware";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const headers = middleware(request);
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers,
    });
  }

  const { searchParams } = new URL(request.url);
  const setNo = parseInt(searchParams.get("setNo") || "1");
  const questions = await prisma.questions.findMany({
    where: { setNo },
  });

  return new NextResponse(JSON.stringify({ questions }), {
    status: 200,
    headers,
  });
}
