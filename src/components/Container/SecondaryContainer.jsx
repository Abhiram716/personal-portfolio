import { Container } from "@mui/material";
import React from "react";

const SecondaryContainer = ({ children, sx }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        "&.MuiContainer-root": {
          backgroundColor: "#37474F",
          ...sx,
        },
      }}
    >
      {children}
    </Container>
  );
};

export default SecondaryContainer;
