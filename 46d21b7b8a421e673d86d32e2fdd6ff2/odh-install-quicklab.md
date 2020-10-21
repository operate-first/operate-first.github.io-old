# Installing ODH using ArgoCD in Quicklab

The steps for instalation in quicklab are basically the same as for [CRC](./odh-install-crc.md).

The only difference is that you need to use the correct URL for your cluster.

In [quicklab guide](./quicklab.md) step 9 there's a screenshot with the Hosts value and the `oc login ...` command.

Use the value (e.g. `upi-0.tcoufaltest.lab.upshift.rdu2.redhat.com:6443`) as the value of the Cluster in steps "Creating the ODH operator" and "Creating the ODH deployment" in [CRC](./odh-install-crc.md).

If you choose the to use command-line to create the Application resources,then edit `examples/odh-operator-app.yaml` and `examples/odh-deployment-app.yaml` and put the value of Cluster there.

Except for the Cluster address the steps are exactly the same.
