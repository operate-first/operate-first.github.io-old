import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Brand, PageHeader, PageHeaderTools, PageHeaderToolsItem, Nav, NavList, NavItem, Button } from "@patternfly/react-core";
import logo from "./logo.png";
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import SlackIcon from '@patternfly/react-icons/dist/esm/icons/slack-icon';
import YoutubeIcon from '@patternfly/react-icons/dist/esm/icons/youtube-icon';

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

const HeaderTools = () => {
  const { site: { siteMetadata: links } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            github
            youtube
            slack
          }
        }
      }
    `
  );

  const headerTools = [
    {
      href: links.github,
      ariaLabel: "Operate First GitHub organization",
      icon: <GithubIcon />,
    },
    {
      href: links.slack,
      ariaLabel: "Operate First Slack workspace",
      icon: <SlackIcon />,
    },
    {
      href: links.youtube,
      ariaLabel: "Operate First YouTube",
      icon: <YoutubeIcon />,
    }
  ];

  return (
    <PageHeaderTools>
      { headerTools.map(t => (
        <PageHeaderToolsItem key={ t.href }>
          <Button
          component='a'
          variant='plain'
          href={ t.href }
          target="top"
          aria-label={ t.ariaLabel }
          >
            { t.icon }
          </Button>
        </PageHeaderToolsItem>
      ))}
    </PageHeaderTools>
  );
}

export const Header = ({ isNavOpen, onNavToggle, location }) => (
  <PageHeader
    className="header"
    logoProps={{href: "/"}}
    logo={<Brand src={logo} alt="ODH Logo" />}
    showNavToggle={(location.pathname !== "/")}
    isNavOpen={isNavOpen}
    onNavToggle={onNavToggle}
    topNav={topNav(location)}
    headerTools={ <HeaderTools /> }
  />
);
