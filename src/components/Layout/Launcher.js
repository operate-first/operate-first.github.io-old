import React, {useState} from 'react';
import { useStaticQuery, graphql } from "gatsby";
import {
  ApplicationLauncher,
  ApplicationLauncherItem,
  ApplicationLauncherGroup,
  DropdownPosition
} from '@patternfly/react-core';
import OpenshiftIcon from '@patternfly/react-icons/dist/esm/icons/openshift-icon';

const Launcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { site: { siteMetadata: { clusters } } } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              clusters {
                  name
                  clusters {
                      name
                      url
                  }
              }
            }
          }
        }
      `
    );

    return (
        <ApplicationLauncher
            onSelect={() => setIsOpen(!isOpen)}
            onToggle={(v) => setIsOpen(v)}
            position={DropdownPosition.right}
            isOpen={isOpen}
            items={clusters.map(group =>
                <ApplicationLauncherGroup label={group.name} key={group.name}>
                    {group.clusters.map(cluster => 
                        <ApplicationLauncherItem key={cluster.name} isExternal href={cluster.url} icon={<OpenshiftIcon color="red"/>}>
                            {cluster.name} - Red Hat OpenShift Console
                        </ApplicationLauncherItem>
                    )}
                </ApplicationLauncherGroup>
            )}
            isGrouped
        />
    );
}

export default Launcher;
