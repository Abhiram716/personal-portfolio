import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import theme from "../page-layouts/theme";

const index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        style={{
          background: theme.palette.background.default,
        }}
        maxWidth={false}
        disableGutters
      >
        <Box sx={{ height: "100vh", color: "white" }}>
          <h1>Hello I am Abhiram Kantipudi</h1>
        </Box>
      </Container>
    </ThemeProvider>
  );
  // <div>index</div>
};

export default index;
