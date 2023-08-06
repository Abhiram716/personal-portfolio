import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { getImage } from "gatsby-plugin-image";

import Project from "./Project";

const Works = ({ data }) => {
  const projectImages = data.projectImages.edges;
  const projectDetails = data.projectDescription.edges;

  const projectsList = [
    {
      title: projectDetails[1].node.frontmatter.title,
      description: projectDetails[1].node.frontmatter.about,
      src: "https://astonishing-zabaione-fecb2e.netlify.app/",
      rev: false,
      imgSrc: projectImages[2].node,
    },
    {
      title: projectDetails[2].node.frontmatter.title,
      description: projectDetails[2].node.frontmatter.about,
      src: "https://ubiquitous-llama-929433.netlify.app/",
      rev: true,
      imgSrc: projectImages[1].node,
    },

    {
      title: projectDetails[0].node.frontmatter.title,
      description: projectDetails[0].node.frontmatter.about,
      src: "https://unrivaled-begonia-507dac.netlify.app/",
      rev: false,
      imgSrc: projectImages[0].node,
    },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        minHeight: "100vh",
        mt: 10.5,
        pb: 15,
        pt: 10,
        pl: { xs: 1.5, sm: 5 },
        pr: { xs: 1.5, sm: 5 },
      }}
    >
      <Grid
        container
        justifyContent={"flex-start"}
        alignItems="center"
        textAlign="center"
        sx={{
          justifyContent: { xs: "center", sm: "center", md: "flex-start" },
        }}
      >
        <Grid item sx={{ ml: { md: 5 } }}>
          <Typography variant="h4" color="white">
            Selected Works.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {projectsList.map((project, i) => {
          let image = getImage(project.imgSrc);

          return (
            <Grid item key={i}>
              <Project
                title={project.title}
                description={project.description}
                src={project.src}
                imgSrc={image}
                rev={project.rev}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Works;
