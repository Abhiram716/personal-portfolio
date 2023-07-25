import { Box, Typography } from "@mui/material";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import PrimaryButton from "../Buttons/PrimaryButton";

const Project = ({ title, description, rev, src, imgSrc }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: rev ? "row-reverse" : "row",
        justifyContent: "center",
        alignItems: "center",
        mt: 12,
      }}
    >
      <Box
        sx={{
          display: "block",
          height: "390px",
          width: "500px",
          bgcolor: "white",
          mr: !rev ? 10 : 0,
          ml: rev ? 10 : 0,
          borderRadius: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignText: "left",
        }}
      >
        <Typography variant="body1" color="white">
          {title}
        </Typography>
        <Typography variant="h5" color="white" sx={{ mt: 2, width: "500px" }}>
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
