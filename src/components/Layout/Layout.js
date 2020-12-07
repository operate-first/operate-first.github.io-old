import React, { useState } from "react";
import { Page, PageSection, PageSectionVariants, TextContent, Button } from "@patternfly/react-core";
import { Header, NavSidebar } from "./";

import "@patternfly/patternfly/patternfly.css";
import "./Layout.scss";

export const Layout = ({ location, title, srcLink, children }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Page
      header={<Header isNavOpen={isNavOpen} onNavToggle={onNavToggle} location={location} />}
      sidebar={<NavSidebar isNavOpen={isNavOpen} location={location} />}
      isManagedSidebar
      className="layout"
    >
      {children}
      <PageSection variant={PageSectionVariants.dark}>
        <TextContent>
          <Button variant="primary" isLarge component="a" href={srcLink} target="_contribute">
            Contribute to this page
          </Button>
        </TextContent>
      </PageSection>
    </Page>
  );
};

export default Layout;
