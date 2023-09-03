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
    {
      img: html,
      name: "Html",
      redirect: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      img: css,
      name: "CSS",
      redirect: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      img: js,
      name: "Javascript",
      redirect: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { img: react, name: "React", redirect: "https://react.dev/" },
    { img: node, name: "Nodejs", redirect: "https://nodejs.org/en" },
    { img: express, name: "Expressjs", redirect: "https://expressjs.com/" },
    { img: mongoDb, name: "MongoDb", redirect: "https://www.mongodb.com/" },
    { img: java, name: "Java", redirect: "https://dev.java/" },
    { img: sql, name: "Sql", redirect: "https://dev.mysql.com/doc/" },
    { img: git, name: "Git", redirect: "https://git-scm.com/" },
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
            <a
              key={skill.name}
              href={skill.redirect}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  maxHeight: { xs: "60px", sm: "80px" },
                  maxWidth: { xs: "60px", sm: "80px" },
                  cursor: "pointer",
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
            </a>
          );
        })}
      </Box>
    </SecondaryContainer>
  );
};

export default Skills;
