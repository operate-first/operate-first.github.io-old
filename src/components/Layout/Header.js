import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  Brand,
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsItem,
  Nav,
  NavList,
  NavItem,
  Button,
} from '@patternfly/react-core';
import logo from './logo.png';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import SlackIcon from '@patternfly/react-icons/dist/esm/icons/slack-icon';
import YoutubeIcon from '@patternfly/react-icons/dist/esm/icons/youtube-icon';
import TwitterIcon from '@patternfly/react-icons/dist/esm/icons/twitter-icon';
import Launcher from './Launcher';

const TopNav = ({ location }) => {
  const navItems = [
    ['data-science', 'Data Science'],
    ['community-handbook', 'Community Handbook '],
    ['blueprints', 'Blueprints'],
    ['community', 'Community'],
  ];

  return (
    <Nav variant="horizontal">
      <NavList>
        {navItems.map(([id, label]) => (
          <NavItem key={id} itemId={id} isActive={location.pathname.startsWith(`/${id}/`)}>
            <Link to={`/${id}/`}>{label}</Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};
TopNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const HeaderTools = () => {
  const {
    site: { siteMetadata: links },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            github
            youtube
            slack
            twitter
          }
        }
      }
    `
  );

  const headerTools = [
    {
      href: links.github,
      ariaLabel: 'Operate First GitHub organization',
      icon: <GithubIcon />,
    },
    {
      href: links.slack,
      ariaLabel: 'Operate First Slack workspace',
      icon: <SlackIcon />,
    },
    {
      href: links.youtube,
      ariaLabel: 'Operate First YouTube',
      icon: <YoutubeIcon />,
    },
    {
      href: links.twitter,
      ariaLabel: 'Operate First Twitter',
      icon: <TwitterIcon />,
    },
  ];

  return (
    <PageHeaderTools>
      <PageHeaderToolsItem>
        <Launcher />
      </PageHeaderToolsItem>
      {headerTools.map((t) => (
        <PageHeaderToolsItem key={t.href}>
          <Button component="a" variant="plain" href={t.href} target="top" aria-label={t.ariaLabel}>
            {t.icon}
          </Button>
        </PageHeaderToolsItem>
      ))}
    </PageHeaderTools>
  );
};

export const Header = ({ isNavOpen, onNavToggle, location }) => (
  <PageHeader
    className="header"
    logoProps={{ href: '/' }}
    logo={<Brand src={logo} alt="ODH Logo" />}
    showNavToggle={location.pathname !== '/'}
    isNavOpen={isNavOpen}
    onNavToggle={onNavToggle}
    topNav={<TopNav location={location} />}
    headerTools={<HeaderTools />}
  />
);

Header.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  onNavToggle: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
