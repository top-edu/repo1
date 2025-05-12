import Quiz from "@/src/quiz/Quiz";

interface PageParams {
  params: Promise<{
    setNo: string;
  }>;
}

export default async function Page({ params }: PageParams) {
  const { setNo } = await params;
  console.log("se======================tNo", setNo);

  const res = await fetch(`http://localhost:3000/api/quiz?setNo=${setNo}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch quiz data");
  }

  const data = await res.json();
  // console.log("data.questions", data.questions);

  return <Quiz questions={data.questions} />;
}
