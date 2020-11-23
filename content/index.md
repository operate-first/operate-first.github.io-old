---
title: Operate First for Open Data Hub
description: "Operate First for ODH"
---

The transition from delivering projects to delivering services involves different roles and a different mindset. Features that enable the software to be run at scale need to be built into the project. [Operate First](https://openinfralabs.org/) means, we must also operate the project, involving developers from the beginning.

As the AICoE in the Office of the CTO at Red Hat we can lead the way with [Open Data Hub](https://opendatahub.io/): operate it in a transparent open cloud environment, build a community around the deployment and define which services would be consumed in what way.

This can act as a blueprint for deploying this service in any environment.

With Operate First, we open up our operational knowledge to all users of Open Data Hub and the open source community. This will allow us to bring the learnings of the SRE team into the open source community and is a potential for us to leverage a broad community input into developing software.

As one of the first steps, we have begun operating Open Data Hub on the Mass Open Cloud(MOC) in an open cloud environment, before we ship it to our customers. At the AICoE, we are focused on creating examples of how ODH is operated and deployed in an open cloud environment, how we perform open source data science in an open cloud environment and sharing our learnings with the community.

This website acts as a landing site for sharing examples from our experience of operating Open Data Hub in an open cloud environment. It is targeted to serve as an upstream platform where a wider community can participate and leverage our work (and we theirs), ultimately to drive an open source solution for cloud operation.

## Getting started

To learn about Open Data Hub and its architecture, visit [opendatahub.io](https://www.opendatahub.io).

To get started with using ODH applications deployed and running on an open cloud instance, visit the **MOC - ODH Users** section.

To get started with deploying components on ODH, visit the **MOC - ODH Operations** section.

To learn more about Operate First: making cloud operations as fundamental as functionality in the upstreams. Read the [Operate First Community Manifesto](https://openinfralabs.org/operate-first-manifesto/)

## Contribute

To contribute to the Operate First initiative, seek support or report bugs on the website, please open an issue [here](https://github.com/operate-first/operate-first.github.io/issues).

## Phases

### Crawl

- CI/Continous Delivery pipeline to build ODH assets
- Continuous Deployment pipeline to deploy ODH on MOC
- Incident and outage management

### Walk

Get real users on the service - students from universities doing classes, opensource projects, AICoE public examples etc.

Work with those users to:

- Improve the AI development workflow
- Improve the AI deployment workflow (MLOps)

### Run

TBD

## Roles

### CI/CD pipeline engineer

- Testing of ODH assets
- Release and publish assets
- Optimize assets for the target platform (e.g. Notebook Images with Intel optimized TF)

### Data Scientist

- Create sample workflows
- Inform testing of ODH assets
- Write end-user documentation

### SRE

- Deployment of ODH assets
- Monitoring / Incident Management

### Service Owner

- Define service interface
- Define service level agreements (SLA)

## Organization

- All systems must be available on the internet (no VPN)
- All data (tickets, logs, metrics) must be publicly available
- Sprint planning and demos are public
