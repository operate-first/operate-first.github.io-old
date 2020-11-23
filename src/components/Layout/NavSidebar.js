import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { Nav, NavExpandable, NavItem, NavList, PageSidebar } from "@patternfly/react-core";

function createNavItem({ id, label, href }, pathname) {
  // only include navItems that start with the current top level navigation
  if (pathname.split("/")[1] !== href.split("/")[1]) {
    return;
  }

  const isActive = pathname === href;

  return (
    <NavItem key={id} itemId={id} isActive={isActive}>
      <Link to={href}>{label}</Link>
    </NavItem>
  );
}

function createNavGroup({ id, label, links }, pathname) {
  const navItems = links.map((c) => createNavItem(c, pathname))
                      .filter((n) => { return n !== undefined });

  if (navItems.length === 0) {
    return;
  }
  
  const isActive = !!links.find((c) => pathname.startsWith(c.href));
  return (
    <NavExpandable key={id} title={label} groupId={id} isActive={isActive} isExpanded={isActive}>
      { navItems }
    </NavExpandable>
  );
}

export const NavSidebar = ({ isNavOpen, location }) => {
  const navData = useStaticQuery(
    graphql`
      {
        navData {
          navItems {
            id
            label
            href
            links {
              id
              label
              href
            }
          }
        }
      }
    `
  ).navData.navItems;

  // No Sidebar for mainpage
  if (location.pathname === "/") {
    return <div />;
  }

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
