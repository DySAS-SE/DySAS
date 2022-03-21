import React from "react";
import ReactDOM from "react-dom";
import {
  Toolbar,
  AppBar,
  Button,
  Box,
  TextField,
  IconButton,
  Typography,
  Container,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

let loggedIn = true;

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h1"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            DySAS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function LoginForm() {
  return (
    // TODO: center align the form (vertically)
    <Box sx={{ mx: "auto", maxWidth: "30em" }}>
      <Typography textAlign="center" variant="h2" component="h2" gutterBottom>
        Login
      </Typography>
      <form className="loginForm">
        <TextField id="username" label="Username" margin="normal" fullWidth />
        <TextField
          id="password"
          label="Password"
          margin="normal"
          fullWidth
          type="password"
        />
        <Box textAlign="right" sx={{ mt: "1em" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}

function CourseItem(props) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h4" component="h3" gutterBottom>
            {props.course.name}
          </Typography>
          <Typography variant="body1">{props.course.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Dashboard() {
  return (
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Courses
      </Typography>
      <CourseItem
        course={{ name: "Course 1", description: "This is a course" }}
      />
    </Box>
  );
}

function MainContent() {
  if (loggedIn) {
    return <Dashboard />;
  } else {
    return <LoginForm />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Box>
      <NavBar />
      <Container sx={{ maxWidth: "100em", my: "5em", padding: "1em" }}>
        <MainContent />
      </Container>
    </Box>
  </React.StrictMode>,
  document.getElementById("root")
);
