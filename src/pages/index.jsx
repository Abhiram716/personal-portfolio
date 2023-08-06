import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import theme from "../theme/theme";
import HomePage from "../components/home-page";
import Works from "../components/project-works";

const Index = ({ data }) => {
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth={false} disableGutters={true}>
        <HomePage />
        <Works data={data} />
      </Container>
    </ThemeProvider>
  );
};

export const query = graphql`
  query {
    projectImages: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 500, height: 390, placeholder: BLURRED)
          }
        }
      }
    }
    projectDescription: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            about
            title
          }
        }
      }
    }
  }
`;

export default Index;
