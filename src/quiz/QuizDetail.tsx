import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
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
        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "text.secondary" }}
        >
          {q.content}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select Answer
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            {q.answerA && (
              <Button fullWidth variant="outlined">
                {q.answerA}
              </Button>
            )}
          </Grid>
          <Grid size={6}>
            {q.answerB && (
              <Button fullWidth variant="outlined">
                {q.answerB}
              </Button>
            )}
          </Grid>
          <Grid size={6}>
            {q.answerC && (
              <Button fullWidth variant="outlined">
                {q.answerC}
              </Button>
            )}
          </Grid>
          <Grid size={6}>
            {q.answerD && (
              <Button fullWidth variant="outlined">
                {q.answerD}
              </Button>
            )}
          </Grid>
          <Grid size={6}>
            {q.answerE && (
              <Button fullWidth variant="outlined">
                {q.answerE}
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
