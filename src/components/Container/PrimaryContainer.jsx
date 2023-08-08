import React from "react";
import { Container } from "@mui/material";

const PrimaryContainer = ({ children, sx }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        "&.MuiContainer-root": {
          background:
            "linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)",
        },
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export default PrimaryContainer;
