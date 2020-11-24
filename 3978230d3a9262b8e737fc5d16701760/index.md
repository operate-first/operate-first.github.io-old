Here you will find a series of docs that outline various procedures and how-tos when interacting with ArgoCD.

# CRC

CRC stands for Code Ready Containers. Download CRC here: https://developers.redhat.com/products/codeready-containers/overview. Follow the guides below for setting up ArgoCD and deploying Open Data Hub (via ArgoCD) in CRC:

1. [Installation of ArgoCD](./downstream/crc.md) - Guide with instructions for setting up ArgoCD in CRC.
2. [Installation of ODH](./downstream/odh-install-crc.md) - Guide with instructions on deploying Open Data Hub in CRC.


# Quicklab

[Quicklab](https://quicklab.upshift.redhat.com/clusters) is a web application where users can automatically provision and install clusters of various Red Hat products into public and private clouds. Follow the guides below for setting up ArgoCD and deploying Open Data Hub (via ArgoCD) in a Quicklab cluster:

1. [Installation of ArgoCD](./downstream/quicklab.md) - Guide with instructions for setting up ArgoCD in a Quicklab cluster.
2. [Setup Persistent Volumes](./downstream/on-cluster-persistent-storage/README.md) - Bare Openshift cluster installations, like for example Quicklab's Openshift 4 UPI clusters may lack persistent volume setup. This guide provides instructions for setting up PVs in your Quicklab cluster.
3. [Installation of ODH](./downstream/odh-install-quicklab.md) - Guide with instructions on deploying the Open Data Hub in a Quicklab cluster.


# Next steps
* [Modifying your ODH deployment](./modify-odh-deployment.md) - Guide for customizing your Open Data Hub deployment i.e. adding multiple services/applications.
