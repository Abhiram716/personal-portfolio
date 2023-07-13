import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import avatarShapes from "../../assets/avatar-shapes.svg";

const HomePage = () => {
  const matchXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        bgcolor: "blue",
        display: "flex",
        flexDirection: matchXs ? "column" : "row",
        justifyContent: matchXs ? "center" : "space-between",
        // justifyContent: matchXs ? "column" : "flex-end",
        alignItems: "center",
        pt: { xs: 15, sm: 20 },
        pl: { xs: 10 },
        pb: 27,
        pr: 14,
      }}
    >
      <Box sx={{ color: "white" }}>
        <Typography variant="h2">
          Frontend <Typography noWrap /> Developer.
        </Typography>
        <Box sx={{ maxWidth: "550px", mt: 3 }}>
          <Typography variant="h5">
            I like to craft solid and scalable frontend products{" "}
            {!matchXs && <Typography noWrap />}
            with great user experiences.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: { xs:"500px",sm:"600px"} }}>
        <img src={avatarShapes} alt="" width="100%"/>
      </Box>
      {/* { svg} */}
    </Container>
  );
};

export default HomePage;
