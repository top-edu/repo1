"use client";
import { useState } from "react";
import { InQuizTypes } from "../types/InQuizTypes";
import QuizDetail from "./QuizDetail";
import { Button, Stack } from "@mui/material";

type QuestionProps = {
  questions: InQuizTypes[];
};

export default function Quiz({ questions }: QuestionProps) {
  const [index, setIndex] = useState(0);
  const question = questions[index];

  return (
    <>
      <QuizDetail q={question} />

      <Stack direction="row" spacing={2} mt={2}>
        <Button
          variant="outlined"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          disabled={index === questions.length - 1}
          onClick={() => setIndex((i) => i + 1)}
        >
          Next
        </Button>
      </Stack>
    </>
  );
}
