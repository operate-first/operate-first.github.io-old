import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { Nav, NavExpandable, NavItem, NavList, PageSidebar } from "@patternfly/react-core";

function createNavItem({ id, label, href }, pathname) {
  let isActive = pathname.startsWith(href);

  return (
    <NavItem key={id} itemId={id} isActive={isActive}>
      <Link to={href}>{label}</Link>
    </NavItem>
  );
}

function createNavGroup({ id, label, links }, pathname) {
  const isActive = !!links.find((c) => pathname.startsWith(c.href));

  return (
    <NavExpandable key={id} title={label} groupId={id} isActive={isActive} isExpanded={isActive}>
      {links.map((c) => createNavItem(c, pathname))}
    </NavExpandable>
  );
}

export const NavSidebar = ({ isNavOpen, location }) => {
  const navData = useStaticQuery(
    graphql`
      {
        allTocYaml {
          edges {
            node {
              id
              href
              label
              links {
                id
                href
                label
              }
            }
          }
        }
      }
    `
  ).allTocYaml.edges.map((x) => x.node);

  let navItems = [];
  if (location) {
    navItems = navData.map((node) => {
      if (node.links) {
        return createNavGroup(node, location.pathname);
      }
      return createNavItem(node, location.pathname);
    });
  }

  const nav = (
    <Nav className="nav" theme="dark" aria-label="Nav">
      <NavList>{navItems}</NavList>
    </Nav>
  );
  return <PageSidebar isNavOpen={isNavOpen} nav={nav} theme="dark" />;
};
