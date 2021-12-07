import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, Link, graphql } from 'gatsby';
import {
  Nav,
  NavExpandable,
  NavItem as DefaultNavItem,
  NavList,
  PageSidebar,
} from '@patternfly/react-core';

const NavItem = ({ id, label, href, remote, location }) => {
  let isActive = location.pathname === href;
  let linkTo = href;
  if (remote) {
    linkTo = remote;
    isActive = false;
  }
  return (
    <DefaultNavItem key={id} itemId={id} isActive={isActive}>
      <Link to={linkTo}>{label}</Link>
    </DefaultNavItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  remote: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const NavGroup = (props) => {
  const { id, label, links, location, href } = props;

  const isSubPath = (path) => location.pathname.split('/')[1] === path.split('/')[1];

  if (!links) {
    if (!isSubPath(href)) {
      return null;
    }
    return <NavItem {...props} location={location} />;
  }

  const navItems = links
    // only include navItems that start with the current top level navigation or are remote urls
    .filter(({ href }) => isSubPath(href))
    .map((node) => <NavItem key={node.id} {...node} location={location} />);
  const isActive = !!links.find((c) => {
    if (c.remote) {
      return false;
    }
    return location.pathname.startsWith(c.href);
  });

  if (navItems.filter(Boolean).length === 0) {
    return null;
  }
  return (
    <NavExpandable key={id} title={label} groupId={id} isActive={isActive} isExpanded={isActive}>
      {navItems}
    </NavExpandable>
  );
};
NavGroup.propTypes = {
  links: PropTypes.array,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  href: PropTypes.string,
};

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
              remote
              href
            }
          }
        }
      }
    `
  ).navData.navItems;

  // No Sidebar for mainpage
  if (location.pathname === '/') {
    return <div />;
  }

  return (
    <PageSidebar
      isNavOpen={isNavOpen}
      nav={
        <Nav className="nav" theme="dark" aria-label="Nav">
          <NavList>
            {location &&
              navData.map((node) => <NavGroup key={node.id} {...node} location={location} />)}
          </NavList>
        </Nav>
      }
      theme="dark"
    />
  );
};

NavSidebar.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
