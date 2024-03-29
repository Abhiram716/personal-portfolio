import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

import dev from "../../images/dev.svg";
import PrimaryContainer from "../Container/PrimaryContainer";

const HomePage = () => {
  const theme = useTheme();
  return (
    <PrimaryContainer
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
        color: theme.palette.primary.contrastText,
        minHeight: "100vh",
        overflow: "hidden",
        pt: { xs: 5, md: 10 },
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
        <Typography variant={"h2"} color={theme.palette.primary.contrastText}>
          Hello, I am Abhiram.
        </Typography>
        <Typography
          variant={"h4"}
          color={theme.palette.primary.contrastText}
          sx={{ maxWidth: "400px", mt: 2 }}
        >
          Building websites one line of code at a time
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "300px", sm: "500px", md: "550px", xl: "600px" },
          mb: { xs: 2, sm: 10 },
        }}
      >
        <img src={dev} alt="" width="100%" height={"100%"} />
      </Box>
    </PrimaryContainer>
  );
};

export default HomePage;
