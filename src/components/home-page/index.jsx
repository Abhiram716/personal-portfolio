import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query Animations {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/skillsAnimation.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  console.log(data.allMarkdownRemark.nodes[0].html);
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", xl: "row" },
        justifyContent: { xs: "center", sm: "center", xl: "space-between" },
        alignItems: "center",
        color: "white",
        minHeight: "100vh",
        pt: { xs: 15, md: 10 },
        pl: { lg: 2 },
        pr: { lg: 2 },
      }}
    >
      <Grid
        container
        item
        lg={4}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Grid item>
          <Typography variant={"h2"} color={"white"}>
            Hello, I am Abhiram.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant={"h4"}
            color={"white"}
            sx={{ maxWidth: "400px", mt: 2 }}
          >
            Building websites one line of code at a time
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={7}>
        <Box sx={{ width: { xs: "350px", sm: "500px", md: "800px" } }}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.nodes[0].html,
            }}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default HomePage;
