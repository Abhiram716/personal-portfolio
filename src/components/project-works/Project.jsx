import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import PrimaryButton from "../Buttons/PrimaryButton";
import { useTheme } from "@emotion/react";

const Project = ({ title, description, rev, src, imgSrc }) => {
  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.down("lg"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: matchLg ? "column" : rev ? "row-reverse" : "row",
        justifyContent: "center",
        alignItems: "center",
        mt: 12,
      }}
    >
      <Box
        sx={{
          display: "block",
          height: matchSm ? "300px" : "390px",
          width: matchSm ? "300px" : "500px",
          bgcolor: "white",
          mr: matchLg ? 0 : !rev ? 10 : 0,
          ml: matchLg ? 0 : rev ? 10 : 0,
          borderRadius: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: matchMd ? "center" : "left",
          mt: matchLg ? 5 : 0,
        }}
      >
        <Typography variant={matchMd ? "h6" : "body1"} color="white">
          {title}
        </Typography>
        <Typography
          variant={matchMd ? "body1" : "h5"}
          color="white"
          sx={{ mt: 2, width: matchMd ? "350px" : "500px" }}
        >
          {description}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <PrimaryButton href={src} endIcon={<AiOutlineRight />}>
            view work
          </PrimaryButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
