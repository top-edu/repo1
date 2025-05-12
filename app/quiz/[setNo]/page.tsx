import Quiz from "@/src/quiz/Quiz";

interface PageParams {
  params: Promise<{
    setNo: string;
  }>;
}

export default async function Page({ params }: PageParams) {
  const { setNo } = await params;
  console.log("======================setNo", setNo);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log("======================baseUrl", baseUrl);

  const res = await fetch(`${baseUrl}/quiz?setNo=${setNo}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch quiz data");
  }

  const data = await res.json();
  // console.log("data.questions", data.questions);

  return <Quiz questions={data.questions} />;
}
