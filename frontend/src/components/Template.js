import React from "react";
import { Outlet } from "react-router-dom";
import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Typography,
  Container,
} from "@mui/material";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        />
        <Typography
          variant="h5"
          component="h1"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          DySAS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function Template() {
  return (
    <Box>
      <NavBar />
      <Container sx={{ maxWidth: "100em", my: "5em", padding: "1em" }}>
        <Outlet />
      </Container>
    </Box>
  );
}
