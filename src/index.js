import React from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginForm() {
  return (
    <form>
      <TextField id="username" label="Username" margin="normal" fullWidth />
      <TextField id="password" label="Password" margin="normal" fullWidth />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}

function App(props) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

ReactDOM.render(<App message="Goodbye" />, document.getElementById("root"));
