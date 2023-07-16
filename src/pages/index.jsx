import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

import HomePage from "../components/home-page";
import Header from "../components/Header";
import theme from '../theme/theme';

const Index = () => {

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Container maxWidth={false} sx={{
        // bgcolor: "red"
      }} disableGutters={true}>
        <Header/>
        <HomePage />
      </Container>
    </ThemeProvider>
  );
};

export default Index;
