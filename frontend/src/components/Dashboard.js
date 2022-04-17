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
  const courseItems = [
    { name: "Course 1", description: "This is a course", id: "15bh" },
    { name: "Course 2", description: "This is a course", id: "19kh" },
    { name: "Course 3", description: "This is a course", id: "16bl" },
    { name: "Course 4", description: "This is a course", id: "15hu" },
  ];
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Courses
      </Typography>
      {courseItems.map((course) => (
        <CourseItem course={course} key={course.id}></CourseItem>
      ))}
    </Box>
  );
}

export default Dashboard;
