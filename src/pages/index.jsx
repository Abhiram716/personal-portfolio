import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

import Header from "../components/Header";
import theme from "../theme/theme";
import HomePage from "../components/Home-page";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth={false} disableGutters={true}>
        <HomePage />
      </Container>
    </ThemeProvider>
  );
};

export default Index;
