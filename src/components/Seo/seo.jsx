import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ titleProp, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const title = titleProp || site.siteMetadata?.title;
  const description = site.siteMetadata?.description;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default Seo;
