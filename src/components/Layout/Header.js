import React from "react";
import { Brand, PageHeader } from "@patternfly/react-core";

import odhLogo from "./odh-logo.svg";

export const Header = ({ isNavOpen, onNavToggle }) => (
  <PageHeader
    className="header"
    logo={<Brand src={odhLogo} alt="ODH Logo" />}
    showNavToggle
    isNavOpen={isNavOpen}
    onNavToggle={onNavToggle}
  />
);
