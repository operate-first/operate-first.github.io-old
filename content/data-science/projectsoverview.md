---
title: Projects Overview
description: This document contains a list of data science projects maintained as a part of Operate First at Red Hat
---
_This document contains a list of data science projects maintained as a part of Operate First at Red Hat._

1. **AI for Continuous Integration** : A container orchestration platform like Kubernetes or OpenShift, produces a lot of build and test related data that can be difficult to parse when you are trying to figure out why a build is failing or why a certain set of tests aren’t passing. Through this project, our aim is to build an open AIOps community involved in developing, integrating and operating AI tools for CI by leveraging the open data that has been made available by OpenShift, Kubernetes and others.  The goal here is to assist developers in decreasing their time to resolution for issues that are signaled by anything present in the CI data. We are working towards this by making the initial tools and relevant data as accessible as possible to foster collaboration and contributions between data scientists and DevOps engineers.

    [Github](https://github.com/aicoe-aiops/ocp-ci-analysis)
    [Blog](https://www.operate-first.cloud/data-science/ai4ci/)

2. **Categorical Encoding** : Categorical variables are string columns in a dataset like product names, alert names, log files keys, and variables in linux configuration files. They need to be handled carefully as they have to be converted to numbers. In this project, we focus on encoding schemes for nominal categorical variables. These variables have no inherent ordering or trend between different categories, for e.g., weather can be rainy, sunny, snowy, etc. Encoding to numbers is challenging because we want to avoid distorting the distances between the levels or categories of the variables, and also retain explainability. Therefore, we search for encoders that optimally balance the trade-off between performance and explainability.

    [Github](https://github.com/aicoe-aiops/categorical-encoding)
    [Blog](https://www.operate-first.cloud/data-science/categorical-encoding/docs/blog/blog.md)

3. **Ceph Drive Failure Prediction** : Many large-scale distributed storage systems, such as Ceph, use mirroring or erasure-coded redundancy to provide fault tolerance. Because of this, scaling storage up can be resource-intensive. This project seeks to mitigate this issue using machine learning. The primary goal here is to build a model to predict if a hard drive will fail within a predefined future time interval. These predictions can then be used by Ceph (or other similar systems) to create or destroy replicas accordingly. In addition to making storage more resource-efficient, this may also improve fault tolerance by up to an order of magnitude, since the probability of data loss is generally related to the probability of multiple, concurrent device failures.

    [Github](https://github.com/aicoe-aiops/ceph_drive_failure)
    [Blog](https://www.operate-first.cloud/data-science/ceph-drive-failure/docs/blog/hard-drive-failure-prediction-blog.md)

4. **Cloud Price Analysis** : Most companies nowadays are paying customers of one of the many cloud vendors in the industry, or are planning to be. These cloud providers keep changing their prices from time to time. However, a lack of information about how and when these prices change results in a lot of uncertainty for customers. Being able to understand price changes would help customers take appropriate measures to best manage their costs. Hence, given a dataset of cloud price lists, we aim to build a Cost-Optimization model that allows the user to make the best decision on how cloud services should be managed over time.

    [Github](https://github.com/aicoe-aiops/cloud-price-analysis-public)
    [Blog](https://www.operate-first.cloud/data-science/cloud-price-analysis/)


5. **Configuration Files Analysis** : Software systems have become more flexible and feature-rich. For example, the configuration file for MySQL has more than 200 configuration entries with different subentries. As a result, configuring these systems is a complicated task and frequently causes configuration errors. Currently, in most cases, misconfigurations are detected by manually specified rules. However, this process is tedious and not scalable. In this project, we propose data-driven methods to detect misconfigurations by discovering frequently occurring patterns in configuration files.

    [Github](https://github.com/aicoe-aiops/configuration-files-analysis)
    [Blog](https://www.operate-first.cloud/data-science/configuration-files-analysis/docs/blog/configuration-file-analysis-blog.md)

6. **Data Science Workflows** : AI Ops team has been working on developing a more structured process around how we manage, execute and deliver on our data science projects, especially those where we collaborate with other Red Hat teams. Having a common framework that we can all start to build from as the team grows and continues to take on more data science projects, it will be hugely beneficial to have an agreed upon and documented process like this in place. And more important than just the existence of some documentation, is that we actually use these tools and find that they provide us with some value. Meaning, that we should keep updating and evolving this process to suit our needs.

    [Github](https://github.com/aicoe-aiops/data-science-workflows)
    [Blog](https://www.operate-first.cloud/data-science/data-science-workflows/)

7. **Github Issue Labeler** : Github issues of any given repository or user space can be automatically labelled using this model. Often in large, open-source repositories many issues go unlabelled and issue boards end up unorganized. With this tool, given sufficient labeled issues, one can extract data, train a model, and set up an app that will output preedicted labels for an issue given its contents with good accuracy.

    [Github](https://github.com/aicoe-aiops/github-labeler)
    [Blog](https://www.operate-first.cloud/data-science/github-labeler/docs/blog.md)

8. **Mailing list Analysis**: This analysis contains example code for how to develop a custom end-to-end email analytics service using the Open Data Hub on OpenShift. We demonstrate this by performing text analysis on the Fedora mailing list. This list contains many discussions about the issues occurring with Fedora development on a monthly basis and suggestions for how to address the issues. This project aims to help the Fedora community bring a more data driven approach to their planning process by performing text analysis and gathering insights into the trends in the email conversations.

    [Github](https://github.com/aicoe-aiops/mailing-list-analysis-toolkit)
    [Blog](https://www.operate-first.cloud/data-science/mailing-list-analysis/)

9. **OpenShift Alert Prediction** : If a customer’s OpenShift cluster goes down, it can have a significant impact on their business. Since there are a variety of reasons why an OpenShift cluster might fail, finding and fixing the issue that the cluster suffers from is not always trivial. However, if we can predict in advance whether a cluster will run into a given issue, then we may be able to fix it before it fails or before it severely impacts the customer. Issues in a cluster are often defined by, or closely related to, the alerts that it fires. So predicting alerts can be a step towards predicting the underlying issue. Thus, the goal of this project is to predict whether a cluster will fire a given alert within the next hour.

    [Github](https://github.com/aicoe-aiops/ocp-alert-prediction-public)

10. **OpenShift Anomaly Detection**: OpenShift deployments could suffer from a variety of issues and bugs. So it can be tedious for an engineer to inspect and diagnose each deployment individually, which in turn can adversely affect customer experience. In this project, we work on the following two initiatives to address this problem:
    - Anomaly Detection: In this approach, we try to identify issues before they occur, or before they significantly impact customers. To do so, we find deployments that behave “anomalously” and try to explain this behaviour.
    - Diagnosis Discovery: In this approach, we try to identify deployments that exhibit similar “symptoms” (issues), and determine exactly what makes these deployments similar to one another. Engineers can then use this information to determine the “diagnosis” of the issues, and apply the same or similar fix to all the deployments.

    [Github](https://github.com/aicoe-aiops/openshift-anomaly-detection)
    [Blog](https://www.operate-first.cloud/data-science/openshift-anomaly-detection/docs/blog/diagnosis-discovery-blog.md)

11. **Pet Image Detection** : After a data scientist has created and trained a model, the next step is putting the model into production. Model serving deploys machine learning models as microservices that can interact easily with other pieces of a larger intelligent application. This project highlights a simple model serving demo which allows users to send data to the model service and receive predictions and implements an explainability algorithm to understand the model predictions better.

    [Github](https://github.com/aicoe-aiops/pet-image-detection)

12. **Prometheus-api-client python** : A python library to make querying prometheus data simpler and also convert metric data into a more Data Science suitable format of a pandas dataframe.

    [Github](https://github.com/AICoE/prometheus-api-client-python)

13. **Sentiment Analysis** : Red Hat has a variety of text based artifacts coming from sources starting from partner and customer engagements to documentation and communication logs. These text based artifacts are valuable and can be used to generate business insights and inform decisions if appropriately mined. The goal of this project is to allow other teams across Red Hat to have a tool at their disposal allowing them to analyze their text data and make informed decisions based on the insights gained from them.

    [Github](https://github.com/aicoe-aiops/sentiment-analysis-public)

14. **Stateful Sessions for Intelligent Apps** : Live audio transcription and other similar applications require stateful processing to support both multi-user sessions and dynamic scale-out. We can persist audio state with a Kafka kappa architecture, but that state must also be preserved across the OpenShift cluster boundary to user web clients. Fortunately, OpenShift's sticky sessions allow stateful sessions to be implemented without complicated custom configurations.The goal of this project is to convert your single user constrained application to support stateful sessions with any number of users. Using the power of OpenShift and Open Data Hub's data monitoring and streaming tools, a stateful architecture can be developed and managed easily.

    [Github](https://github.com/Gkrumbach07/audio-decoder-demo)
    [Blog](https://www.operate-first.cloud/data-science/stateful-sessions-for-intelligent-apps/docs/blog.md)

15. **Sync Pipelines** : Data ingress pipelines for DataHub via Argo pipelines.

    [Github](https://github.com/aicoe-aiops/sync-pipelines)

16. **Time Series Analysis** : Data science with time series metric data aims to reduce the search space of root cause analysis by providing concise visualizations and potential hotspots for specific real time problems. For simple monolithic architectures, monitoring using metrics is a viable solution as the system is less complex. However, with cloud applications, it is inefficient to manually monitor a large number of generated metrics. We need automated ways of finding root causes and incidents. In this series of notebooks, we are going to discuss how we can manipulate, visualize, and forecast the time series metrics data to achieve better monitoring systems.

    [Github](https://github.com/aicoe-aiops/time-series)
    [Blog](https://www.operate-first.cloud/data-science/time-series/)
