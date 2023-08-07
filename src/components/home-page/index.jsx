import { Box, Container, Typography } from "@mui/material";
import React from "react";

import dev from "../../images/dev.svg";

const HomePage = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          xl: "row",
        },
        justifyContent: { xs: "center", sm: "center", xl: "space-between" },
        alignItems: "center",
        color: "white",
        minHeight: "100vh",
        overflow: "hidden",
        pt: { xs: 2, md: 10 },
        pl: { xs: 2, lg: 10 },
        pr: { xs: 2, lg: 20 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant={"h2"} color={"white"}>
          Hello, I am Abhiram.
        </Typography>
        <Typography
          variant={"h4"}
          color={"white"}
          sx={{ maxWidth: "400px", mt: 2 }}
        >
          Building websites one line of code at a time
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "300px", sm: "400px", md: "600px", xl: "800px" },
          mb: { xs: 2, sm: 10 },
        }}
      >
        <img src={dev} alt="" width="100%" height={"100%"} />
      </Box>
    </Container>
  );
};

export default HomePage;
