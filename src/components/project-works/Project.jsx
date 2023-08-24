import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { GatsbyImage } from "gatsby-plugin-image";

import PrimaryButton from "../Buttons/PrimaryButton";

const Project = ({ title, description, reverse, src, imgSrc, alt }) => {
  const theme = useTheme();

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
        overflow: "hidden",
        mt: 12,
        p: { xs: 3 },
        borderRadius: 3,
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      <GatsbyImage image={imgSrc} alt={alt} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          mt: { xs: 5, sm: 5, xl: 0 },
          ml: { xs: 0, sm: 0, md: reverse ? 0 : 5 },
          mr: { xs: 0, sm: 0, md: reverse ? 5 : 0 },
        }}
      >
        <Typography
          variant={"body1"}
          color={theme.palette.primary.contrastText}
        >
          {title}
        </Typography>
        <Typography
          variant={"h6"}
          color={theme.palette.primary.contrastText}
          sx={{
            mt: 2,
            width: { xs: "250px", sm: "350px", md: "350px", lg: "500px" },
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
