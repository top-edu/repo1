import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
    <Card variant="outlined" sx={{ margin: 2 }}>
      <div>
        <Stack direction="row" spacing={2}>
          <Typography gutterBottom variant="h5" component="div">
            Question
          </Typography>{" "}
          <Typography>1 of 15</Typography>
        </Stack>
      </div>
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: q.content }} />
      </CardContent>
      <CardActions>
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Select Answer
          </Typography>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
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
      </CardActions>
    </Card>
  );
}
