import { CssBaseline, ThemeProvider } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";

import About from "../components/About";
import ContactSection from "../components/Contact";
import PrimaryContainer from "../components/Container/PrimaryContainer";
import Layout from "../components/Layout/Layout";
import Skills from "../components/Skills";
import HomePage from "../components/home-page";
import Works from "../components/project-works";
import theme from "../theme/theme";

const Index = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <PrimaryContainer>
          <section id="home">
            <HomePage />
          </section>
          <Skills />
          <section id="work">
            <Works data={data} />
          </section>
          <section id="about">
            <About data={data} />
          </section>
          <ContactSection />
        </PrimaryContainer>
      </Layout>
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
    Oragnization: file(extension: { eq: "png" }, name: { eq: "jtc" }) {
      childImageSharp {
        gatsbyImageData(width: 500, height: 500, placeholder: BLURRED)
      }
    }
  }
`;

export default Index;
