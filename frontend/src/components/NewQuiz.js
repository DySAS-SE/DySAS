import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React from "react";

function NewQuiz() {
  return (
    <Box sx={{ mx: "auto", maxWidth: "30em", alignItems: "center" }}>
      <Typography variant="h4" gutterbottom>
        CS330 | Create new quiz
      </Typography>
      <FormControl>
        <TextField
          type="date"
          label="startDate"
          id="start-date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        ></TextField>
        <TextField
          type="time"
          label="startTime"
          id="start-time"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        ></TextField>
        <TextField
          type="number"
          label="duration"
          id="duration"
          helperText="Test duration in hours"
          margin="normal"
        ></TextField>
        <TextField
          type="text"
          label="Topics"
          id="topics"
          margin="normal"
          helperText="Topics included in the test"
        ></TextField>
        <TextField
          type="number"
          label="questionCount"
          id="question-count"
          margin="normal"
          helperText="Number of questions in the test"
        ></TextField>
        <Button type="submit" variant="contained">
          Create test
        </Button>
      </FormControl>
    </Box>
  );
}

export default NewQuiz;
