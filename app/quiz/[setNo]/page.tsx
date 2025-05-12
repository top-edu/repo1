import Quiz from "@/src/quiz/Quiz";

type Props = {
  params: { setNo: string };
};

export default async function Page({ params }: Props) {
  const { setNo } = await params;
  console.log("se======================tNo", setNo);

  const res = await fetch(`http://localhost:3000/api/quiz?setNo=${setNo}`, {
    cache: "no-store", // use 'force-cache' or 'no-store' based on your needs
  });
  const data = await res.json();
  // console.log("data.questions", data.questions);

  return <Quiz questions={data.questions} />;
}
