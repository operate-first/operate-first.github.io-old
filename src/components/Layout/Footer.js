import React from 'react';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';
import redhatLogo from './RHLogo.png';
import './Footer.scss';

export const Footer = () => (
  <footer key="footer-2" className="ws-org-pfsite-l-footer-dark pf-m-no-fill">
    <Grid className="pf-u-py-xl-on-sm pf-u-py-0-on-md pf-u-align-items-center">
      <GridItem md={2} mdOffset={1}>
        <Text
          component={TextVariants.a}
          href="//www.redhat.com"
          target="top"
          aria-label="Visit Red Hat.com"
        >
          <img src={redhatLogo} alt="Red Hat logo" width="100px" />
        </Text>
      </GridItem>
      <GridItem md={3}>
        <span className="ws-org-pfsite-site-copyright">Operate First is a Red Hat Initiative.</span>
      </GridItem>
      <GridItem md={6}>
        <Text
          component={TextVariants.a}
          href="//www.redhat.com/en/about/privacy-policy"
          target="top"
          aria-label="Privacy statement"
        >
          Privacy statement
        </Text>
        <Text
          component={TextVariants.a}
          href="//www.redhat.com/en/about/terms-use"
          target="top"
          aria-label="Terms of use"
        >
          Terms of use
        </Text>
        <Text
          component={TextVariants.a}
          href="//www.redhat.com/en/about/all-policies-guidelines"
          target="top"
          aria-label="All policies and guidelines"
        >
          All policies and guidelines
        </Text>
        <Text
          component={TextVariants.a}
          href="//thenounproject.com/exgoya/"
          target="top"
          aria-label="Operate First Logo Creator"
        >
          Creator of Operate-First Logo
        </Text>
        <Text
          component={TextVariants.a}
          href="//www.openstack.org/legal/community-code-of-conduct/"
          target="top"
          aria-label="Code of Conduct"
        >
          Code of Conduct
        </Text>
      </GridItem>
    </Grid>
  </footer>
);
