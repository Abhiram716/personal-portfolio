import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import theme from "../theme/theme";
import HomePage from "../components/home-page";
import Works from "../components/project-works";

const Index = ({ data }) => {
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
    projectDetails: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(width: 500, height: 390, placeholder: BLURRED)
              }
            }
            about
            title
            link
          }
        }
      }
    }
  }
`;

export default Index;
