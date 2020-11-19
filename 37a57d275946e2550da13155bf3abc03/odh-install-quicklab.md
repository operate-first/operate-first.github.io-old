# Installing ODH using ArgoCD in Quicklab

The steps for installing ODH in Quicklab are basically the same as for [CRC](./odh-install-crc.md).

The only difference is that you need to use the correct URL for your cluster and setup sufficient persistent volumes (PVs) in your cluster.

- To setup persistent volumes in your Quicklab cluster, follow the guide [here](./on-cluster-persistent-storage).

- In [quicklab guide](./quicklab.md) step 9 there's a screenshot with the Hosts value and the `oc login ...` command. Use the value (e.g. `upi-0.tcoufaltest.lab.upshift.rdu2.redhat.com:6443`) as the value of the Cluster in steps "Creating the ODH operator" and "Creating the ODH deployment" in [CRC](./odh-install-crc.md).

- If you choose to use the command-line to create the Application resources, then edit `examples/odh-operator-app.yaml` and `examples/odh-deployment-app.yaml` and put the value of Cluster there.

- Also, please note that if you are installing multiple ODH components, you may need to assign additional worker nodes for your cluster. This is mentioned in [quicklab guide](./quicklab.md) step 3.

Except for the Cluster address, the steps are exactly the same.
