---
title: Projects Overview
description: This document contains a list of projects within the AI Ops Team at Red Hat
---
_This document contains a list of projects within the AI Ops Team at Red Hat._

1. **Ceph Drive Failure Prediction** : Many large-scale distributed storage systems, such as Ceph, use mirroring or erasure-coded redundancy to provide fault tolerance. Because of this, scaling storage up can be resource-intensive. This project seeks to mitigate this issue using machine learning. The primary goal here is to build a model to predict if a hard drive will fail within a predefined future time interval. These predictions can then be used by Ceph (or other similar systems) to create or destroy replicas accordingly. In addition to making storage more resource-efficient, this may also improve fault tolerance by up to an order of magnitude, since the probability of data loss is generally related to the probability of multiple, concurrent device failures.

    Github Repo : https://github.com/aicoe-aiops/ceph_drive_failure

2. **Data Science Workflows** : AI Ops team has been working on developing a more structured process around how we manage, execute and deliver on our data science projects, especially those where we collaborate with other Red Hat teams. Having a common framework that we can all start to build from as the team grows and continues to take on more data science projects, it will be hugely beneficial to have an agreed upon and documented process like this in place. And more important than just the existence of some documentation, is that we actually use these tools and find that they provide us with some value. Meaning, that we should keep updating and evolving this process to suit our needs.

    Github Repo : https://github.com/aicoe-aiops/data-science-workflows

3. **Configuration Files Analysis** : Software systems have become more flexible and feature-rich. For example, the configuration file for MySQL has more than 200 configuration entries with different subentries. As a result, configuring these systems is a complicated task and frequently causes configuration errors. Currently, in most cases, misconfigurations are detected by manually specified rules. However, this process is tedious and not scalable. In this project, we propose data-driven methods to detect misconfigurations by discovering frequently occurring patterns in configuration files.

    Github Repo : https://github.com/aicoe-aiops/configuration-files-analysis

4. **OCP Alert Prediction** : If a customer’s OpenShift cluster goes down, it can have a significant impact on their business. Since there are a variety of reasons why an OpenShift cluster might fail, finding and fixing the issue that the cluster suffers from is not always trivial. However, if we can predict in advance whether a cluster will run into a given issue, then we may be able to fix it before it fails or before it severely impacts the customer. Issues in a cluster are often defined by, or closely related to, the alerts that it fires. So predicting alerts can be a step towards predicting the underlying issue. Thus, the goal of this project is to predict whether a cluster will fire a given alert within the next hour.

    Github Repo : https://github.com/aicoe-aiops/ocp-alert-prediction-public

5. **Prometheus-api-client python** : A python library to make querying prometheus data simpler and also convert metric data into a more Data Science suitable format of a pandas dataframe.

    Github Repo : https://github.com/AICoE/prometheus-api-client-python

6. **Sentiment Analysis** : Red Hat has a variety of text based artifacts coming from sources starting from partner and customer engagements to documentation and communication logs. These text based artifacts are valuable and can be used to generate business insights and inform decisions if appropriately mined. The goal of this project is to allow other teams across Red Hat to have a tool at their disposal allowing them to analyze their text data and make informed decisions based on the insights gained from them.

    Github Repo : https://github.com/aicoe-aiops/sentiment-analysis-public

7.  **Sync Pipelines** : Data ingress pipelines for DataHub via Argo pipelines.

    Github Repo : https://github.com/aicoe-aiops/sync-pipelines
