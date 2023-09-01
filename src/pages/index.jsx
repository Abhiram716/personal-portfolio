import { CssBaseline, ThemeProvider } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";

import PrimaryContainer from "../components/Container/PrimaryContainer";
import Header from "../components/Header";
import HomePage from "../components/home-page";
import Works from "../components/project-works";
import theme from "../theme/theme";
import Skills from "../components/Skills";
import ContactSection from "../components/Contact";

const Index = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <PrimaryContainer>
        <HomePage />
        <Skills />
        <Works data={data} />
        <ContactSection />
      </PrimaryContainer>
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
