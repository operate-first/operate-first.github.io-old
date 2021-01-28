---
title: Projects Overview
description: This document contains a list of projects within the AI Ops Team at Red Hat
---
_This document contains a list of projects within the AI Ops Team at Red Hat._

1. **Ceph Drive Failure Prediction** : Many large-scale distributed storage systems, such as Ceph, use mirroring or erasure-coded redundancy to provide fault tolerance. Because of this, scaling storage up can be resource-intensive. This project seeks to mitigate this issue using machine learning. The primary goal here is to build a model to predict if a hard drive will fail within a predefined future time interval. These predictions can then be used by Ceph (or other similar systems) to create or destroy replicas accordingly. In addition to making storage more resource-efficient, this may also improve fault tolerance by up to an order of magnitude, since the probability of data loss is generally related to the probability of multiple, concurrent device failures.

    Github Repo : https://github.com/aicoe-aiops/ceph_drive_failure

2. **Cloud Price Analysis** : Most companies nowadays are paying customers of one of the many cloud vendors in the industry, or are planning to be. These cloud providers keep changing their prices from time to time. However, a lack of information about how and when these prices change results in a lot of uncertainty for customers. Being able to understand price changes would help customers take appropriate measures to best manage their costs. Hence, given a dataset of cloud price lists, we aim to build a Cost-Optimization model that allows the user to make the best decision on how cloud services should be managed over time.

    Github Repo : https://github.com/aicoe-aiops/cloud-price-analysis-public

3. **Configuration Files Analysis** : Software systems have become more flexible and feature-rich. For example, the configuration file for MySQL has more than 200 configuration entries with different subentries. As a result, configuring these systems is a complicated task and frequently causes configuration errors. Currently, in most cases, misconfigurations are detected by manually specified rules. However, this process is tedious and not scalable. In this project, we propose data-driven methods to detect misconfigurations by discovering frequently occurring patterns in configuration files.

    Github Repo : https://github.com/aicoe-aiops/configuration-files-analysis

4. **Data Science Workflows** : AI Ops team has been working on developing a more structured process around how we manage, execute and deliver on our data science projects, especially those where we collaborate with other Red Hat teams. Having a common framework that we can all start to build from as the team grows and continues to take on more data science projects, it will be hugely beneficial to have an agreed upon and documented process like this in place. And more important than just the existence of some documentation, is that we actually use these tools and find that they provide us with some value. Meaning, that we should keep updating and evolving this process to suit our needs.

    Github Repo : https://github.com/aicoe-aiops/data-science-workflows

5. **Mailing list Analysis**: This analysis contains example code for how to develop a custom end-to-end email analytics service using the Open Data Hub on OpenShift. We demonstrate this by performing text analysis on the Fedora mailing list. This list contains many discussions about the issues occurring with Fedora development on a monthly basis and suggestions for how to address the issues. This project aims to help the Fedora community bring a more data driven approach to their planning process by performing text analysis and gathering insights into the trends in the email conversations.

    Github Repo : https://github.com/aicoe-aiops/mailing-list-analysis-toolkit

6. **OpenShift Alert Prediction** : If a customer’s OpenShift cluster goes down, it can have a significant impact on their business. Since there are a variety of reasons why an OpenShift cluster might fail, finding and fixing the issue that the cluster suffers from is not always trivial. However, if we can predict in advance whether a cluster will run into a given issue, then we may be able to fix it before it fails or before it severely impacts the customer. Issues in a cluster are often defined by, or closely related to, the alerts that it fires. So predicting alerts can be a step towards predicting the underlying issue. Thus, the goal of this project is to predict whether a cluster will fire a given alert within the next hour.

    Github Repo : https://github.com/aicoe-aiops/ocp-alert-prediction-public

7. **OpenShift Anomaly Detection**: OpenShift deployments could suffer from a variety of issues and bugs. So it can be tedious for an engineer to inspect and diagnose each deployment individually, which in turn can adversely affect customer experience. In this project, we work on the following two initiatives to address this problem:
    - Anomaly Detection: In this approach, we try to identify issues before they occur, or before they significantly impact customers. To do so, we find deployments that behave “anomalously” and try to explain this behaviour.
    - Diagnosis Discovery: In this approach, we try to identify deployments that exhibit similar “symptoms” (issues), and determine exactly what makes these deployments similar to one another. Engineers can then use this information to determine the “diagnosis” of the issues, and apply the same or similar fix to all the deployments.

    Github Repo : https://github.com/aicoe-aiops/openshift-anomaly-detection

8. **Prometheus-api-client python** : A python library to make querying prometheus data simpler and also convert metric data into a more Data Science suitable format of a pandas dataframe.

    Github Repo : https://github.com/AICoE/prometheus-api-client-python

9. **Sentiment Analysis** : Red Hat has a variety of text based artifacts coming from sources starting from partner and customer engagements to documentation and communication logs. These text based artifacts are valuable and can be used to generate business insights and inform decisions if appropriately mined. The goal of this project is to allow other teams across Red Hat to have a tool at their disposal allowing them to analyze their text data and make informed decisions based on the insights gained from them.

    Github Repo : https://github.com/aicoe-aiops/sentiment-analysis-public

10. **Sync Pipelines** : Data ingress pipelines for DataHub via Argo pipelines.

    Github Repo : https://github.com/aicoe-aiops/sync-pipelines