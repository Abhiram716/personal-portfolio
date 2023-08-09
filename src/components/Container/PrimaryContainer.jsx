import React from "react";
import { Container, useTheme } from "@mui/material";

const PrimaryContainer = ({ children, sx }) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        "&.MuiContainer-root": {
          backgroundColor: theme.palette.primary.main,
        },
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export default PrimaryContainer;
