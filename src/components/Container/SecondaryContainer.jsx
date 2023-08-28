import { Container, useTheme } from "@mui/material";
import React from "react";

const SecondaryContainer = ({ children, sx }) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        "&.MuiContainer-root": {
          backgroundColor: theme.palette.secondary.main,
          ...sx,
        },
      }}
    >
      {children}
    </Container>
  );
};

export default SecondaryContainer;
