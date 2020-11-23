import React from "react";
import { Link } from "gatsby";
import { Brand, PageHeader, Nav, NavList, NavItem } from "@patternfly/react-core";
import logo from "./logo.png";

function createNavItem(id, label, href, pathname) {
  let isActive = pathname.startsWith(href);

  return (
    <NavItem key={id} itemId={id} isActive={isActive}>
      <Link to={href}>{label}</Link>
    </NavItem>
  );
}

function topNav(location) {
  return (
  <Nav variant="horizontal">
    <NavList>
      { createNavItem('data-science', 'Data Science', '/data-science/', location.pathname) }
      { createNavItem('users', 'Users', '/users/', location.pathname) }
      { createNavItem('operators', 'Operators', '/operators/', location.pathname) }
      { createNavItem('blueprints', 'Blueprints', '/blueprints/', location.pathname) }
    </NavList>
  </Nav>
  )
};

export const Header = ({ isNavOpen, onNavToggle, location }) => (
  <PageHeader
    className="header"
    logoProps={{href: "/"}}
    logo={<Brand src={logo} alt="ODH Logo" />}
    showNavToggle
    isNavOpen={isNavOpen}
    onNavToggle={onNavToggle}
    topNav={topNav(location)}
  />
);
