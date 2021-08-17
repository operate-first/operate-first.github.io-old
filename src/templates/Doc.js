import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { PageSection, PageSectionVariants, TextContent } from '@patternfly/react-core';

import Layout from '../components/Layout';
import JupyterNotebook from '../components/JupyterNotebook';
import SEO from '../components/seo';
import './Doc.scss';

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

const DocTemplate = ({ data: { site, mdx }, location }) => {
  const siteTitle = site.siteMetadata.title;
  const shortcodes = { Link, JupyterNotebook }; // Provide common components here

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        srcLink={mdx.fields.srcLink}
      />
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
};
DocTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    mdx: PropTypes.object,
  }),
  location: PropTypes.object,
};

export default DocTemplate;
