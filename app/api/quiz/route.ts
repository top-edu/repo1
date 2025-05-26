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

export async function POST(request: NextRequest) {
  const headers = middleware(request);

  try {
    const body = await request.json();
    const { setNo, type, categoryId, questions } = body;

    if (!setNo || !Array.isArray(questions)) {
      return new NextResponse(
        JSON.stringify({
          error: "Invalid input: setNo and questions are required.",
        }),
        {
          status: 400,
          headers,
        }
      );
    }

    const createdQuestions = await prisma.questions.createMany({
      data: questions.map((q: any) => ({
        setNo,
        type: q.type || type || "TS",
        categoryId: q.categoryId || categoryId || null,
        content: q.content,
        answerA: q.answerA,
        answerB: q.answerB,
        answerC: q.answerC,
        answerD: q.answerD,
        answerE: q.answerE,
        correctAnswer: q.correctAnswer,
        note: q.note || null,
        level: q.level || null,
      })),
    });

    return new NextResponse(
      JSON.stringify({
        message: "Quiz created",
        count: createdQuestions.count,
      }),
      {
        status: 201,
        headers,
      }
    );
  } catch (err) {
    console.error("Error creating quiz questions:", err);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers,
      }
    );
  }
}
