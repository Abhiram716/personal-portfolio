import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

import Header from "../components/Header";
import HomePage from "../components/home-page";
import Works from "../components/project-works";
import theme from "../theme/theme";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth={false} disableGutters={true}>
        <HomePage />
        <Works />
      </Container>
    </ThemeProvider>
  );
};

export default Index;
