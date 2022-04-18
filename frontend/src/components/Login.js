import React from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function LoginForm() {
  const navigate = useNavigate();
  let [error, setError] = React.useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    let username = document.forms[0].username.value;
    let password = document.forms[0].password.value;
    const query =
      "http://localhost:5000/login?username=" +
      username +
      "&password=" +
      password;
    const res = await fetch(query);
    console.log(res);
    if (res.status === 404) {
      setError(true);
    } else {
      const data = await res.json();
      delete data.message;
      navigate("/dashboard", data);
    }
  }

  return (
    // TODO: center align the form (vertically)
    <Box sx={{ mx: "auto", maxWidth: "30em", alignItems: "center" }}>
      <Typography textAlign="center" variant="h2" component="h2" gutterBottom>
        Login
      </Typography>
      <form className="loginForm" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          id="password"
          label="Password"
          margin="normal"
          fullWidth
          type="password"
          required
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
          {error === true && (
            <Alert severity="error" sx={{ mt: "1em" }}>
              Invalid username or password!
            </Alert>
          )}
        </Box>
      </form>
    </Box>
  );
}

export default LoginForm;
