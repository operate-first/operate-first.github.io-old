import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { Link } from 'gatsby';
import SlackIcon from '@patternfly/react-icons/dist/esm/icons/slack-icon';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
        <div style={{textAlign: 'center', marginTop: '2em', marginBottom: '2em'}}>
            <b style={{fontSize: "1.5em"}}>Page not found</b>
            <br />
            <img style={{width: "100px"}}src="https://www.patternfly.org/v4/images/404.235047dd57c8e5d52f224e2e0cd6f5ae.svg" />
            <p>You just hit a route that doesn&#39;t exist... the sadness 😢</p>
            <p>For any questions reach out to us on <a href="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww">Slack</a>
            </p>
            <Link to={`/`}>Return to homepage</Link>
        </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

NotFoundPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};
