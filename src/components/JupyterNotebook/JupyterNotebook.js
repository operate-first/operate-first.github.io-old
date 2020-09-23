import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./JupyterNotebook.scss";

export const JupyterNotebook = ({ path }) => {
  const notebookData = useStaticQuery(
    graphql`
      query {
        allJupyterNotebook {
          edges {
            node {
              fileAbsolutePath
              id
              html
            }
          }
        }
      }
    `
  ).allJupyterNotebook.edges.map((x) => x.node);

  const notebook = notebookData.find((nb) => {
    return nb.fileAbsolutePath.endsWith(path);
  });

  if (!notebook) {
    return null;
  }

  return (
    <div className="jupyter-notebook">
      <div dangerouslySetInnerHTML={{ __html: notebook.html }} />
    </div>
  );
};

export default JupyterNotebook;
