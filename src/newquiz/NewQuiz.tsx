"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const defaultQuestion = {
  setNo: 1,
  type: "TS",
  categoryId: 1,
  content: "",
  answerA: "",
  answerB: "",
  answerC: "",
  answerD: "",
  answerE: "",
  correctAnswer: "A",
  note: "",
  level: "Easy",
};

export default function NewQuiz() {
  const [questions, setQuestions] = useState([defaultQuestion]);

  const handleChange = (index: number, field: string, value: any) => {
    const updated = [...questions];
    updated[index] = { ...updated[index], [field]: value };
    setQuestions(updated);
  };

  // const addQuestion = () => {
  //   setQuestions([...questions, defaultQuestion]);
  // };

  const removeQuestion = (index: number) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questions }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(`Success! ${data.count} questions created.`);
      setQuestions([defaultQuestion]);
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 1000, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New Quiz
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              p: 2,
              mb: 3,
              position: "relative",
            }}
          >
            {/* <Typography variant="h6">Question {index + 1}</Typography> */}

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  label="Content"
                  fullWidth
                  value={q.content}
                  onChange={(e) =>
                    handleChange(index, "content", e.target.value)
                  }
                  required
                />
              </Grid>

              {["A", "B", "C", "D", "E"].map((opt) => (
                <Grid key={opt}>
                  <TextField
                    label={`Answer ${opt}`}
                    fullWidth
                    value={q[`answer${opt}` as keyof typeof q]}
                    onChange={(e) =>
                      handleChange(index, `answer${opt}`, e.target.value)
                    }
                    required={opt !== "E"}
                  />
                </Grid>
              ))}

              <Grid size={2}>
                <TextField
                  select
                  label="Correct Answer"
                  fullWidth
                  value={q.correctAnswer}
                  onChange={(e) =>
                    handleChange(index, "correctAnswer", e.target.value)
                  }
                  required
                >
                  {["A", "B", "C", "D", "E"].map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid>
                <TextField
                  select
                  label="Level"
                  fullWidth
                  value={q.level}
                  onChange={(e) => handleChange(index, "level", e.target.value)}
                  required
                >
                  {["Easy", "Medium", "Difficult"].map((lvl) => (
                    <MenuItem key={lvl} value={lvl}>
                      {lvl}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid>
                <TextField
                  label="Set No"
                  type="number"
                  fullWidth
                  value={q.setNo}
                  onChange={(e) =>
                    handleChange(index, "setNo", Number(e.target.value))
                  }
                />
              </Grid>

              <Grid>
                <TextField
                  label="Category ID"
                  type="number"
                  fullWidth
                  value={q.categoryId}
                  onChange={(e) =>
                    handleChange(index, "categoryId", Number(e.target.value))
                  }
                />
              </Grid>

              <Grid>
                <TextField
                  label="Note"
                  fullWidth
                  value={q.note}
                  onChange={(e) => handleChange(index, "note", e.target.value)}
                />
              </Grid>
            </Grid>

            {questions.length > 1 && (
              <IconButton
                sx={{ position: "absolute", top: 10, right: 10 }}
                color="error"
                onClick={() => removeQuestion(index)}
              ></IconButton>
            )}
          </Box>
        ))}

        {/* <Box sx={{ textAlign: "center", mb: 2 }}>
          <Button type="button" onClick={addQuestion} variant="outlined">
            Add Question
          </Button>
        </Box> */}

        <Box textAlign="center">
          <Button variant="contained" color="primary" type="submit">
            Submit Quiz
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
