import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const HomePage = () => {
  const matchMd = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        bgcolor: "blue",
        display: "flex",
        flexDirection: matchMd ? "column" : "row",
        justifyContent: matchMd ? "center" : "space-between",
        alignItems: "center",
        pt: 20,
        pl: 20,
        pb: 27,
        pr: 20,
      }}
    >
      <Box sx={{ color: "white" }}>
        <Typography variant="h2">
          Frontend <Typography noWrap /> Developer.
        </Typography>
        <Box sx={{ maxWidth: "550px", mt: 3 }}>
          <Typography variant="h5">
            I like to craft solid and scalable frontend products{" "}
            {!matchMd && <Typography noWrap />}
            with great user experiences.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
