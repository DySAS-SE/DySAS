import React from "react";
import ReactDOM from "react-dom";
import {
  Toolbar,
  AppBar,
  Button,
  Box,
  TextField,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
    <Box sx={{ mx: "auto", mt: "5em", padding: "1em", maxWidth: "30em" }}>
      <form className="loginForm">
        <TextField id="username" label="Username" margin="normal" fullWidth />
        <TextField id="password" label="Password" margin="normal" fullWidth />
        <Box textAlign="center" sx={{ padding: 2 }}>
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

function App(props) {
  return (
    <Box>
      <NavBar />
      <LoginForm />
    </Box>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
