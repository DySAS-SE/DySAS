import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
  IconButton,
  Collapse,
  styled,
} from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

class ResponseTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    const nextState = Object.assign({}, this.state);
    nextState.expanded = !nextState.expanded;
    this.setState(nextState);
  }

  render() {
    return (
      <Card sx={{ padding: "0.25em", mb: "1em" }}>
        <CardContent>
          <Typography variant="h6">
            Question {this.props.response.questionId}
          </Typography>
          <Typography variant="body1">
            score : {this.props.response.score} / {this.props.response.total}
          </Typography>
        </CardContent>
        <CardActions>
          <ExpandMore
            expand={this.state.expanded}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box sx={{ padding: "1em" }}>
              <Typography variant="h6">
                {this.props.response.questionText}
              </Typography>
              <Box sx={{ mt: "1em" }}>
                <FormControl>
                  <FormLabel id="choices">Answer:</FormLabel>
                  <RadioGroup>
                    {Object.keys(this.props.response.options).map((option) => (
                      <FormControlLabel
                        value={option}
                        control={<Radio />}
                        checked={this.props.response.choice === option}
                        label={this.props.response.options[option]}
                        key={option}
                      />
                    ))}
                  </RadioGroup>
                  <Button
                    sx={{ padding: "0.5em", mt: "0.5em" }}
                    type="clear"
                    variant="outlined"
                  >
                    Challenge
                  </Button>
                </FormControl>
              </Box>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

function Result() {
  const data = [
    {
      questionId: "1",
      questionText:
        "What is the probability that the result of a coin toss is heads?",
      options: {
        a: "0.5",
        b: "0.75",
        c: "1",
        d: "0.25",
      },
      choice: "a",
      score: "2",
      total: "3",
    },
    {
      questionId: "2",
      questionText:
        "What is the probability that the result of a coin toss is heads?",
      options: {
        a: "0.5",
        b: "0.75",
        c: "1",
        d: "0.25",
      },
      choice: "a",
      score: "2",
      total: "3",
    },
    {
      questionId: "3",
      questionText:
        "What is the probability that the result of a coin toss is heads?",
      options: {
        a: "0.5",
        b: "0.75",
        c: "1",
        d: "0.25",
      },
      choice: "a",
      score: "2",
      total: "3",
    },
    {
      questionId: "4",
      questionText:
        "What is the probability that the result of a coin toss is heads?",
      options: {
        a: "0.5",
        b: "0.75",
        c: "1",
        d: "0.25",
      },
      choice: "a",
      score: "1",
      total: "3",
    },
    {
      questionId: "5",
      questionText:
        "What is the probability that the result of a coin toss is heads?",
      options: {
        a: "0.5",
        b: "0.75",
        c: "1",
        d: "0.25",
      },
      choice: "a",
      score: "3",
      total: "3",
    },
    {
      questionId: "6",
      questionText:
        "What is the probability that the result of a coin toss is heads?",
      options: {
        a: "0.5",
        b: "0.75",
        c: "1",
        d: "0.25",
      },
      choice: "a",
      score: "0",
      total: "3",
    },
    {
      questionId: "7",
      questionText:
        "What is the probability that the result of a coin toss is heads?",
      options: {
        a: "0.5",
        b: "0.75",
        c: "1",
        d: "0.25",
      },
      choice: "a",
      score: "1",
      total: "3",
    },
  ];
  return (
    <Box>
      <Typography variant="h3">CS330 | Quiz 1</Typography>
      <Box sx={{ mt: "2em", padding: "2em" }}>
        {data.map((tab) => (
          <ResponseTab response={tab} key={tab.questionId} />
        ))}
      </Box>
    </Box>
  );
}
export default Result;
