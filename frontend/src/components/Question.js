import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import "../css/Question.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: false,
      b: false,
      c: false,
      d: false,
    };
    // necessary to make this work
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("change!");
    const value = event.target.value;
    const nextState = {
      a: false,
      b: false,
      c: false,
      d: false,
    };
    nextState[value] = true;
    this.setState(nextState);
  }

  handleSubmit() {}

  render() {
    const clearState = {
      a: false,
      b: false,
      c: false,
      d: false,
    };
    const options = this.state;
    return (
      <Box>
        <Typography variant="h3">CS330 | Quiz 1</Typography>
        <Card sx={{ mt: "2em", padding: "2em" }}>
          <Typography variant="h6">
            Q1) What is the probability that the result of a coin toss is heads?
          </Typography>
          <Box sx={{ mt: "1em" }}>
            <FormControl>
              <FormLabel id="choices">Answer:</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  checked={options.a}
                  label="0.5"
                  onChange={this.handleChange}
                ></FormControlLabel>
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  checked={options.b}
                  label="0.25"
                  onChange={this.handleChange}
                ></FormControlLabel>
                <FormControlLabel
                  value="c"
                  control={<Radio />}
                  checked={options.c}
                  label="0.75"
                  onChange={this.handleChange}
                ></FormControlLabel>
                <FormControlLabel
                  value="d"
                  control={<Radio />}
                  checked={options.d}
                  label="1"
                  onChange={this.handleChange}
                ></FormControlLabel>
              </RadioGroup>
              <Box
                sx={{
                  padding: "0.5em",
                  gap: "0.5em",
                }}
              >
                <Button
                  sx={{ padding: "0.5em", mt: "0.25em" }}
                  type="clear"
                  variant="outlined"
                  onClick={() => this.setState(clearState)}
                  className="action-btns"
                >
                  Clear choice
                </Button>
                <Button
                  sx={{ padding: "0.5em", mt: "0.25em" }}
                  type="submit"
                  variant="outlined"
                  onClick={() => this.handleSubmit()}
                  className="action-btns"
                >
                  Next
                </Button>
                <Button
                  sx={{ padding: "0.5em", mt: "0.25em" }}
                  type="submit"
                  variant="outlined"
                  onClick={() => this.handleSubmit()}
                  className="action-btns"
                  color="warning"
                  disabled
                >
                  Finish
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Card>
      </Box>
    );
  }
}

export default Question;
