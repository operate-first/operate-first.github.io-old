# Workloads deployed on the Operate First Clusters

This webpage displays the workloads deployed on the operate first clusters.
Developers can display their workload on the below list by including the following annotations to their request namespace on the operate first clusters:

```yaml

apiVersion: v1
kind: Namespace
metadata:
    annotations:
        op1st/project-owner: <name of owner group>
        op1st/onboarding-issue: <onboarding issue link>
        op1st/docs: <link of the project documentation>

```

Example PR: https://github.com/operate-first/apps/pull/1846

---

<iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/smaug&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameborder="0"></iframe>

<iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=moc/infra&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameborder="0"></iframe>

<iframe src="https://grafana-public.operate-first.cloud/d-solo/opf-overview/workload-overview?orgId=1&var-datasource=default&var-cluster=emea/balrog&var-namespace=All&theme=light&panelId=4" width="1200" height="400" frameborder="0"></iframe>
