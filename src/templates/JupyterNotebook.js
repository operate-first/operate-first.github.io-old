import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { PageSection, PageSectionVariants, TextContent } from '@patternfly/react-core';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import './JupyterNotebook.scss';

export const pageQuery = graphql`
  query JupyterNotebookQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    jupyterNotebook(id: { eq: $id }) {
      id
      html
      fields {
        srcLink
      }
    }
  }
`;

const JupyterNotebookTemplate = ({ data: { site, jupyterNotebook }, location }) => {
  return (
    <Layout
      location={location}
      title={site.siteMetadata.title}
      srcLink={jupyterNotebook.fields.srcLink}
    >
      <SEO title={''} description={''} />
      <PageSection className="jupyterNotebook" variant={PageSectionVariants.light}>
        <TextContent>
          <div className="jupyter-notebook">
            <div dangerouslySetInnerHTML={{ __html: jupyterNotebook.html }} />
          </div>
        </TextContent>
      </PageSection>
    </Layout>
  );
};
JupyterNotebookTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    jupyterNotebook: PropTypes.object,
  }),
  location: PropTypes.object,
};

export default JupyterNotebookTemplate;
