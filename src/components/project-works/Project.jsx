import { Box, Typography } from "@mui/material";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { GatsbyImage } from "gatsby-plugin-image";

import PrimaryButton from "../Buttons/PrimaryButton";

const Project = ({ title, description, reverse, src, imgSrc, alt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: reverse ? "row-reverse" : "row",
          lg: reverse ? "row-reverse" : "row",
        },
        justifyContent: "center",
        alignItems: "center",
        mt: 12,
        overflow: "hidden",
      }}
    >
      <GatsbyImage image={imgSrc} alt={alt} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
          textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          mt: { xs: 5, sm: 5, xl: 0 },
          ml: { xs: 0, sm: 0, md: reverse ? 0 : 5 },
          mr: { xs: 0, sm: 0, md: reverse ? 5 : 0 },
        }}
      >
        <Typography variant={"body1"} color="white">
          {title}
        </Typography>
        <Typography
          variant={"h6"}
          color="white"
          sx={{
            mt: 2,
            width: { xs: "350px", sm: "350px", md: "350px", lg: "500px" },
          }}
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
