import { Box, Container } from "@mui/material";
import React from "react";

import FadeInTypography from "../AnimatedTypography/FadeInTypography";
import Project from "./Project";

const Works = () => {
  const projectsList = [
    {
      title: "Memory card Game",
      description:
        "Your goal is to select as many characters as possible without clicking on the same one twice. Your score is incremented by 1 each time you successfully pick a card you hadn't selected yet and it is reset to 0 when you select the same card twice.",
      src: "https://ubiquitous-llama-929433.netlify.app/",
      rev: false,
      imgSrc: "",
    },
    {
      title: "Mapping Iss",
      description:
        "This application points out the location of ISS. This application is built using vannila js and leaflet.js and main purpose of this project is to know the workings of fecth in JS",
      src: "https://astonishing-zabaione-fecb2e.netlify.app/",
      rev: true,
      imgSrc: "",
    },
    {
      title: "Shopping Cart",
      description:
        "A simple client side react app with functionality of adding items to cart and removing items from cart. This project is built using CSS, React",
      src: "https://unrivaled-begonia-507dac.netlify.app/",
      rev: false,
      imgSrc: "",
    },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        minHeight: "100vh",
        mt: 20.5,
        pb: 15,
        pt: 10,
        pl: 10,
        pr: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <FadeInTypography
          variant={"h4"}
          color={"white"}
          duration={"1000"}
          fromOpacity={0}
          toOpacity={1}
        >
          Selected Works.
        </FadeInTypography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {projectsList.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            description={project.description}
            src={project.src}
            imgSrc={project.imgSrc}
            rev={project.rev}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Works;
