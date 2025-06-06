export type InQuizTypes = {
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  answerE: string | null;
  categoryId: number;
  commonContentId: number | null;
  content: string;
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  correctAnswerCount: number;
  id: number;
  lastModifiedTime: string;
  level: "Easy" | "Medium" | "Difficult";
  newQuestionOfChenyi: string | null;
  note: string;
  setNo: number;
  source: string | null;
  totalAnswerCount: number;
  type: string;
  wrongQuestionOfChenyi: number;
};
