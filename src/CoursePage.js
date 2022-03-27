import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

function QuizItem(props) {
  return (
    <Card sx={{ width: "100%", mt: "1em" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h4" component="h3" gutterBottom>
            {props.quiz.name}
          </Typography>
          <Typography variant="body1">Date : {props.quiz.date}</Typography>
          <Typography variant="body1">
            Description : {props.quiz.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function CoursePage(props) {
  const [quizItems, setQuizes] = useState([
    { name: "Quiz 1", description: "This is a quiz", date: "7/3/22" },
    { name: "Quiz 2", description: "This is a quiz", date: "7/3/22" },
  ]);

  return (
    <Box>
      <Typography variant="h3" component="h2" gutterBottom>
        CS330
      </Typography>
      {quizItems.map((quiz) => (<QuizItem quiz={quiz} key={quiz.name} />))}
    </Box>
  );
}

export default CoursePage;
