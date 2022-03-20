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
    <form margin="auto">
      <TextField id="username" label="Username" margin="normal" fullWidth />
      <TextField id="password" label="Password" margin="normal" fullWidth />
      <Box textAlign="center">
        <Button type="submit" variant="contained" color="primary" size="large">
          Login
        </Button>
      </Box>
    </form>
  );
}

function App(props) {
  return (
    <Box>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
