import React from "react";
import { graphql } from "gatsby";
import { TextContent } from "@patternfly/react-core";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import "./Doc.scss";

const DocTemplate = ({ data, pageContext, location }) => {
  const docContent = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={docContent.frontmatter.title}
        description={docContent.frontmatter.description || docContent.excerpt}
      />
      <TextContent className="doc">
        <h1>{docContent.frontmatter.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: docContent.html }} />
      </TextContent>
    </Layout>
  );
};

export default DocTemplate;

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        idx
        description
      }
    }
  }
`;
