import { Grid, Typography } from "@mui/material";
import React from "react";
import { getImage } from "gatsby-plugin-image";

import Project from "./Project";
import PrimaryContainer from "../Container/PrimaryContainer";

const Works = ({ data }) => {
  const projectDetails = data?.projectDetails?.edges;

  return (
    <PrimaryContainer
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
