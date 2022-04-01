import React from "react";
import { Button, Box, TextField, Typography } from "@mui/material";

function LoginForm() {
  return (
    // TODO: center align the form (vertically)
    <Box sx={{ mx: "auto", maxWidth: "30em", alignItems: "center" }}>
      <Typography textAlign="center" variant="h2" component="h2" gutterBottom>
        Login
      </Typography>
      <form className="loginForm" onSubmit={(event) => event.preventDefault()}>
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

export default LoginForm;
