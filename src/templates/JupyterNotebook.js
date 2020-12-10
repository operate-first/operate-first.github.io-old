import React from "react";
import { graphql } from "gatsby";
import { PageSection, PageSectionVariants, TextContent } from "@patternfly/react-core";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import "./JupyterNotebook.scss";

export default function JupyterNotebookTemplate(data) {
  return (
    <Layout location={data.location} title={data.data.site.siteMetadata.title} srcLink={data.data.jupyterNotebook.fields.srcLink}>
      <SEO title={""} description={""} />
      <PageSection className="jupyterNotebook" variant={PageSectionVariants.light}>
        <TextContent>
          <div className="jupyter-notebook">
            <div dangerouslySetInnerHTML={{ __html: data.data.jupyterNotebook.html }} />
          </div>
        </TextContent>
      </PageSection>
     </Layout>
   );
}

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
