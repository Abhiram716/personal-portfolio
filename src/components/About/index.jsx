import React from "react";

import SecondaryContainer from "../Container/SecondaryContainer";
import { Box, Typography, useTheme } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  console.log(data);
  const theme = useTheme();
  const organizationImage = data?.Oragnization;
  let imageSrc = getImage(organizationImage);
  return (
    <SecondaryContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pb: 5,
        pt: 5,
        pl: { xs: 1.5, sm: 5 },
        pr: { xs: 1.5, sm: 5 },
      }}
    >
      <Typography variant="h2" color={theme.palette.primary.contrastText}>
        About
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
          backgroundColor: theme.palette.secondary.light,
          p: 3,
          borderRadius: 3,
          mt: 5,
          boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Box sx={{ width: "200px", height: "200px ", mr: { xs: 0, md: 5 } }}>
          <GatsbyImage image={imageSrc} alt="organization" />
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant={"body1"}
              color={theme.palette.primary.contrastText}
              sx={{ mr: { xs: 0, lg: 50 }, mt: { xs: 2, lg: 0 } }}
            >
              Software Engneer Intern
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.primary.contrastText}
            >
              Oct,2022 - Apr,2023
            </Typography>
          </Box>

          <Typography
            variant="h6"
            color={theme.palette.primary.contrastText}
            sx={{ width: { xs: "300px", sm: "400px", md: "500px" } }}
          >
            <ul>
              <li>
                I worked as full-stack developer developing web apps with a
                skill set geared toward front-end development.
              </li>
              <li>
                Utilized React JS with modular, reusable, component-based
                architecture following latest standards.
              </li>
              <li>
                Experience in developing component-based designs for REST APIs
                utilizing Typescript-based reusable components and services.
              </li>
              <li>
                Working knowledge of version control technologies such as Git,
                code repositories such as GitHub
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </SecondaryContainer>
  );
};

export default About;
