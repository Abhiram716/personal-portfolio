import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import theme from "../theme/theme";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}></Container>
    </ThemeProvider>
  );
};

export default Index;
