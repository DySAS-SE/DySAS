import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

function CourseItem(props) {
  return (
    <Card sx={{ width: "100%", mt: "1em" }} elevation="2">
      <CardActionArea>
        <CardContent>
          <Typography variant="h4" component="h3" gutterBottom>
            {props.course.name}
          </Typography>
          <Typography variant="body1">Date : {props.course.date}</Typography>
          <Typography variant="body1">
            Description : {props.course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function CoursePage(props) {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        CS330
      </Typography>
      <CourseItem
        course={{
          name: "Quiz 1",
          description: "This is a Quiz",
          date: "7/3/22",
        }}
      />
      <CourseItem
        course={{
          name: "Quiz 2",
          description: "This is a Quiz",
          date: "7/3/22",
        }}
      />
      <CourseItem
        course={{
          name: "Quiz 3",
          description: "This is a Quiz",
          date: "7/3/22",
        }}
      />
      <CourseItem
        course={{
          name: "Quiz 4",
          description: "This is a Quiz",
          date: "7/3/22",
        }}
      />
    </Box>
  );
}

export default CoursePage;
