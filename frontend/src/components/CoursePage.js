import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  IconButton,
  Modal,
} from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import NewQuiz from "./NewQuiz.js";

function QuizItem(props) {
  return (
    <Card sx={{ width: "100%", mt: "1em" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h4" component="h3" gutterBottom>
            {props.quiz.name}
          </Typography>
          <Typography variant="body1">Date : {props.quiz.date}</Typography>
          <Typography variant="body1">{props.quiz.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalOpen() {
    const nextState = Object.assign({}, this.state);
    nextState.modalActive = true;
    this.setState(nextState);
  }

  handleModalClose() {
    const nextState = Object.assign({}, this.state);
    nextState.modalActive = false;
    this.setState(nextState);
  }

  render() {
    const quizItems = [
      {
        name: "Quiz 1",
        description: "This is a quiz",
        date: "7/3/22",
        id: "12ab",
      },
      {
        name: "Quiz 2",
        description: "This is a quiz",
        date: "7/3/22",
        id: "14ab",
      },
      {
        name: "Quiz 3",
        description: "This is a quiz",
        date: "7/3/22",
        id: "14ag",
      },
      {
        name: "Quiz 4",
        description: "This is a quiz",
        date: "7/3/22",
        id: "14vb",
      },
      {
        name: "Quiz 5",
        description: "This is a quiz",
        date: "7/3/22",
        id: "14gv",
      },
      {
        name: "Endsem exam",
        description: "CS330 quiz",
        date: "4/4/22",
        id: "14fg",
      },
    ];
    return (
      <>
        <Box>
          <Typography variant="h3" gutterBottom>
            CS330
          </Typography>
          {quizItems.map((quiz) => (
            <QuizItem quiz={quiz} key={quiz.id} />
          ))}
        </Box>
        <IconButton
          sx={{
            position: "fixed",
            right: "0",
            bottom: "0",
            mb: "3em",
            mr: "3em",
          }}
          onClick={this.handleModalOpen}
        >
          <AddCircleRoundedIcon
            color="primary"
            fontSize="large"
            sx={{ transform: "scale(2)" }}
          />
        </IconButton>
        <Modal open={this.state.modalActive} onClose={this.handleModalClose}>
          <NewQuiz />
        </Modal>
      </>
    );
  }
}

export default CoursePage;
