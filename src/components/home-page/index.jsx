import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import dev from "../../images/dev.svg";

const HomePage = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", xl: "row" },
        justifyContent: { xs: "center", sm: "center", xl: "space-between" },
        alignItems: "center",
        color: "white",
        minHeight: "100vh",
        overflow: "auto",
        pt: { xs: 15, md: 10 },
        pl: { lg: 10 },
        pr: { lg: 20 },
      }}
    >
      {/* <Grid
        container
        lg={4}
        justifyContent="center"
        alignItems="end"
        textAlign="center"
      >
        <Grid item>
          <Typography variant={"h2"} color={"white"}>
            Hello, I am Abhiram.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant={"h4"}
            color={"white"}
            sx={{ maxWidth: "400px", mt: 2 }}
          >
            Building websites one line of code at a time
          </Typography>
        </Grid>
      </Grid> */}
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
          width: { xs: "350px", sm: "500px", md: "800px" },
          mt: { xs: 10 },
        }}
      >
        <img src={dev} alt="" width={"100%"} />
      </Box>
    </Container>
  );
};

export default HomePage;
