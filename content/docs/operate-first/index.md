---
title: Operate First
idx: 1
description: "Operate First for ODH"
---

The transition from delivering projects to delivering services involves different roles and a different mindset. Features that enable the software to be run at scale need to be built into the project. [Operate First](https://openinfralabs.org/) means, we must also operate the project, involving developers from the beginning.

As the AICoE in the Office of the CTO at Red Hat we can lead the way with [OpenDataHub](https://opendatahub.io/): operate it in a transparent open cloud environment, build a community around the deployment and define which services would be consumed in what way.

This can act as a blueprint for deploying this service in any environment.

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
