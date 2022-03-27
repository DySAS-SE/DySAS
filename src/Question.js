import { Box, Card, Typography } from "@mui/material";
import React from "react";

function Question() {
  return (
    <Box>
      <Typography variant="h3">CS330 | Quiz 1</Typography>
      <Card>
        <Typography>
          What is the probability that the result of a coin toss is heads?
        </Typography>
      </Card>
    </Box>
  );
}

export default Question;
