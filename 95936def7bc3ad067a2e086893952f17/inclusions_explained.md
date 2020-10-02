# Inclusions explained

It is likely that your team does not have `get` access to all namespace scoped resources.
This can be an issue when deploying apps to a namespace in a cluster, because ArgoCD will
attempt to discover all namespace scoped resourced and be denied. To avoid this, we limit
ArgoCD to discover the resources that are available to project admins, these should be added
under the `resource.inclusions` ArgoCD configurations in `manifests/overlays/<target_env>/configs/argo_cm/resource.inclusions`.

If your application contains resources that a project `admin` does not have permissions
to list/edit then you can request that a cluster admin deploy aggregated roles to add
such permissions. See here for an [example](https://github.com/argoproj/argo-events/blob/master/manifests/cluster-install/rbac/argo-events-aggregate-to-admin.yaml).

Once having done so, you can make a PR with these resources added onto the `resource.inclusions`
list.

## Resources

Read more about exclusion/inclusions [here](https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/#resource-exclusioninclusion).
