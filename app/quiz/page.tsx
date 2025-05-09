import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Quiz from "../components/quiz/Quiz";

type Repo = {
  id: number;
  type: string;
  categoryId: number;
  setNo: number;
  commonContentId: number;
  content: string;
};

// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const res = await fetch("http://localhost:3000/api/questions");
//   const repo: Repo = await res.json();
//   // Pass data to the page via props
//   return { props: { repo } };
// }) satisfies GetServerSideProps<{ repo: Repo }>;

export default function Page({}) {
  return <Quiz />;
}
