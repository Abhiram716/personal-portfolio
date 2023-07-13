import { Container, Typography, Box, useMediaQuery } from "@mui/material";
import React from "react";

const HomePage = () => {
  
  const matchXs = useMediaQuery((theme) => theme.breakpoints.down("md"));
  
  return (
    <Container
      maxWidth={false}
      sx={{
        // bgcolor: "blue",
        display: matchXs ? "flex" : "block",
        flexDirection : matchXs ? "column" : "none",
        justifyContent: matchXs ? "center" : "none",
        alignItems : matchXs ? "center" : "none",
        pt: { lg: 27, xs: 20 },
        pl: { lg: 27 },
        pr: { lg: 27 },
        pb: { lg: 37, xs: 27 },
      }}
      disableGutters={true}
    >
      <Box>
        <Typography variant="h1" color={"white"}>
          Frontend <Typography noWrap />
          Developer
        </Typography>
      </Box>
      <Box
      sx={{  width: "230px" }}
      >
        <Typography variant="subtitle1" color={"white"}>
          I like to craft solid and scalable frontend products{" "}
          {!matchXs && <Typography noWrap />}
          with great user experiences.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
