import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

import {
  css,
  express,
  gatsby,
  git,
  html,
  java,
  js,
  mongoDb,
  node,
  react,
  sql,
} from "../../images/skills";
import SecondaryContainer from "../Container/SecondaryContainer";

const Skills = () => {
  const theme = useTheme();
  const skills = [
    { img: html, name: "Html" },
    { img: css, name: "CSS" },
    { img: js, name: "Javascript" },
    { img: react, name: "React" },
    { img: gatsby, name: "Gatsby" },
    { img: node, name: "Nodejs" },
    { img: express, name: "Expressjs" },
    { img: mongoDb, name: "MongoDb" },
    { img: java, name: "Java" },
    { img: sql, name: "Sql" },
    { img: git, name: "Git" },
  ];
  return (
    <SecondaryContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pb: 10,
        pt: 10,
        pl: { xs: 1.5, md: 5 },
        pr: { xs: 1.5, md: 5 },
        mt: 5,
      }}
    >
      <Typography
        variant="h4"
        color={theme.palette.primary.contrastText}
        sx={{ ml: 5 }}
      >
        Skills:
      </Typography>
      <Grid container sx={{ mt: 2 }} rowGap={5}>
        {skills.map((skill) => {
          return (
            <Grid
              item
              xs={3}
              sm={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxHeight: { xs: "50px", sm: "70px", md: "90px", lg: "110px" },
                maxWidth: "110px",
              }}
            >
              <img
                src={skill.img}
                alt="skill"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
              <Typography variant="body1" color="white" sx={{ mt: 0.5 }}>
                {skill.name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </SecondaryContainer>
  );
};

export default Skills;
