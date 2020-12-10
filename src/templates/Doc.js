import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { PageSection, PageSectionVariants, TextContent } from "@patternfly/react-core";

import Layout from "../components/Layout";
import JupyterNotebook from "../components/JupyterNotebook";
import SEO from "../components/seo";
import "./Doc.scss";

const shortcodes = { Link, JupyterNotebook }; // Provide common components here

export default function DocTemplate({ data: { site, mdx }, pageContext, location }) {
  const siteTitle = site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.description} srcLink={mdx.fields.srcLink} />
      <PageSection className="doc" variant={PageSectionVariants.light}>
        <TextContent>
          <h1>{mdx.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </TextContent>
      </PageSection>
    </Layout>
  );
}

export const pageQuery = graphql`
  query DocQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        srcLink
      }
      frontmatter {
        title
        description
      }
    }
  }
`;
