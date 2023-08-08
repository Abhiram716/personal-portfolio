import { Grid, Typography } from "@mui/material";
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
        pt: 5,
        pl: 10,
        pr: 10,
        pb: 5,
      }}
    >
      <Typography variant="h4" color={"white"}>
        Skills
      </Typography>
      <Typography variant="body1" color={"white"}>
        Skills I picked up along the way:
      </Typography>
      <Grid container columns={{ xs: 3, sm: 4 }} rowSpacing={3} sx={{ mt: 2 }}>
        {skills.map((skill) => {
          return (
            <Grid
              item
              xs={1}
              sm={1}
              key={skill.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            >
              <img
                src={skill.img}
                alt="skill"
                style={{
                  boxSizing: "border-box",
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
