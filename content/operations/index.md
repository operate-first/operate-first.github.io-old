---
title: Operations
description: "Docs for operations related tasks and services.__"
---

In this section, you can find documentation pertaining to operations within the Operate First initiative. 

## GitOps and Operate First

In Operate First, operations span cluster operations as well as operations for managed services. We follow the [GitOps][1] operating model for OpenShift cluster and service management. Because this model hinges on Git as a single source of truth, we perform all operations for live deployments via GitHub pull-requests. As a result, practically anyone can submit changes to the state of the cluster. Various applications managed by the Operate First team can be updated in a similar manner.

## Site Reliability Engineering

Operate First's mission is to adapt industry best practices around Site Reliability Engineering (SRE) in an open and transparent manner. We consume practices as outlined in places such as the [Google SRE book][2] and implement them in our operating framework. [Here][3] you will find resources and documentation that describe our implementation.

## Toolbox

Toolbox is a Linux utility that provides a containerized environment in which software can be installed and used. We have created an Operate First toolbox that included tools such as Kustomize, SOPS, KSOPS, and more that can be utilized for workflows. You can find details for installing our toolbox [here][4].

[1]: https://www.redhat.com/en/topics/devops/what-is-gitops 
[2]: https://sre.google/workbook/table-of-contents/
[3]: https://www.operate-first.cloud/operations/sre/incident-management/incident-management-procedure.md
[4]: https://www.operate-first.cloud/operations/toolbox/README.md
