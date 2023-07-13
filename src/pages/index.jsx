import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import theme from "../theme/theme";
import HomePage from "../components/home-page";

const Index = () => {
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Container maxWidth={false} sx={{
        // bgcolor: "red"
      }} disableGutters={true}>
        <HomePage />
      </Container>
    </ThemeProvider>
  );
};

export default Index;
