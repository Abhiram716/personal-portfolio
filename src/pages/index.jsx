import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

import Header from "../components/Header";
import theme from '../theme/theme';

const Index = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Header/>
      <Container maxWidth={false}></Container>
    </ThemeProvider>
  );
};

export default Index;
