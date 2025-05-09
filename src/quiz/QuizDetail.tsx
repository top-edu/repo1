import { Box, Card, Chip, Divider, Stack, Typography } from "@mui/material";
import { InQuizTypes } from "../types/InQuizTypes";

type Props = {
  q: InQuizTypes;
};

export default function QuizDetail({ q }: Props) {
  return (
    <Card variant="outlined">
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Question
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {q.content}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select Answer
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label={q.answerA} size="small" />
          <Chip color="primary" label={q.answerB} size="small" />
          <Chip color="primary" label={q.answerC} size="small" />
          <Chip color="primary" label={q.answerD} size="small" />
          <Chip color="primary" label={q.answerE} size="small" />
        </Stack>
      </Box>
    </Card>
  );
}
