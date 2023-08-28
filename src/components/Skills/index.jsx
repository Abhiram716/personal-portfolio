import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

import {
  css,
  express,
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
        alignItems: "center",
        pb: 5,
        pt: 5,
        pl: { xs: 1.5, sm: 5 },
        pr: { xs: 1.5, sm: 5 },
        mt: 5,
      }}
    >
      <Typography variant="h4" color={theme.palette.primary.contrastText}>
        Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 5,
          mt: 4,
        }}
      >
        {skills.map((skill) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: { xs: "60px", sm: "80px" },
                maxWidth: { xs: "60px", sm: "80px" },
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
              <Typography variant="body2" color="white" sx={{ mt: 0.5 }}>
                {skill.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </SecondaryContainer>
  );
};

export default Skills;
