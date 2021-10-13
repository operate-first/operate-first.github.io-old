import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { PageSection, PageSectionVariants, TextContent } from '@patternfly/react-core';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import './MarkdownRemark.scss';

export const pageQuery = graphql`
  query MarkdownQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        srcLink
      }
      frontmatter {
        title
        description
        extraClasses
        banner {
          html
        }
      }
    }
  }
`;

const MarkdownTemplate = ({ data: { site, markdownRemark }, location }) => {
  const siteTitle = site.siteMetadata.title;

  return (
    <Layout
      location={location}
      title={siteTitle}
      srcLink={markdownRemark.fields.srcLink}
      banner={markdownRemark.frontmatter.banner}
    >
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
      />
      <PageSection
        className={`doc ${markdownRemark.frontmatter.extraClasses}`}
        variant={PageSectionVariants.light}
        isWidthLimited
      >
        <TextContent>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </TextContent>
      </PageSection>
    </Layout>
  );
};
MarkdownTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    markdownRemark: PropTypes.object,
  }),
  location: PropTypes.object,
};

export default MarkdownTemplate;
