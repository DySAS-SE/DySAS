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
          <Typography variant="body1">
            Description : {props.course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Dashboard() {
  return (
    <Box>
      <Typography variant="h3" component="h3" gutterBottom>
        Courses
      </Typography>
      <CourseItem
        course={{ name: "Course 1", description: "This is a course" }}
      />
      <CourseItem
        course={{ name: "Course 2", description: "This is a course" }}
      />
      <CourseItem
        course={{ name: "Course 3", description: "This is a course" }}
      />
      <CourseItem
        course={{ name: "Course 4", description: "This is a course" }}
      />
    </Box>
  );
}

export default Dashboard;
