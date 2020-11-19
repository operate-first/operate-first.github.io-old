import React from "react";
import { Brand, PageHeader } from "@patternfly/react-core";
import logo from "./logo.png";

export const Header = ({ isNavOpen, onNavToggle }) => (
  <PageHeader
    className="header"
    logoProps={{href: "/"}}
    logo={<Brand src={logo} alt="ODH Logo" />}
    showNavToggle
    isNavOpen={isNavOpen}
    onNavToggle={onNavToggle}
  />
);
