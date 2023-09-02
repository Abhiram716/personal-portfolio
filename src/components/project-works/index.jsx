import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { getImage } from "gatsby-plugin-image";

import Project from "./Project";
import PrimaryContainer from "../Container/PrimaryContainer";

const Works = ({ data }) => {
  const projectDetails = data?.projectDetails?.edges;
  const theme = useTheme();

  return (
    <PrimaryContainer
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        pb: 5,
        pt: 5,
        pl: { xs: 1.5, sm: 5 },
        pr: { xs: 1.5, sm: 5 },
      }}
    >
      <Typography variant="h4" color={theme.palette.primary.contrastText}>
        Selected Works.
      </Typography>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {projectDetails.map((project, i) => {
          let { id } = project.node;
          let { title, link, about, image } = project.node.frontmatter;
          let imageSrc = getImage(image);
          return (
            <Grid item key={id}>
              <Project
                title={title}
                description={about}
                src={link}
                imgSrc={imageSrc}
                reverse={i % 2 === 0}
                alt={title}
              />
            </Grid>
          );
        })}
      </Grid>
    </PrimaryContainer>
  );
};

export default Works;
