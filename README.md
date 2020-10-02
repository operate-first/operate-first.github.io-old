# Operate First Website

For more information regarding the purpose and roadmap, view the [website](https://operate-first.github.io/) or the [markdown doc](https://github.com/operate-first/operate-first.github.io/blob/master/content/docs/operate-first/index.md)

## Usage

Customize your `.env` file similar to `.env.example`(.env.example)

### Development / Contributing

#### Adding a document / post

All posts are located in the `/content/docs` directory. Each file is a Markdown (`.md`) file. Create the name of the link `my-path` and inside create an `index.md`.

`/content/docs/my-document/index.md`

```markdown
---
title: My Document
description: My Document Description
---

# Content goes here

valid markdown
```

#### Local Development

It is recommended you clone any remote content repositories or forks as you prefer:
```shell script
git clone git@github.com:operate-first/continuous-deployment.git
```

You can run the app locally to preview your changes.
In terminal:

```shell script
make dev
```

Runs `npm install` and `npm start`/`gatsby develop`;

#### Previewing your changes on GitHub pages

When previewing your changes on a fork.

First, enable github pages to use the gh-pages branch from root.

![](misc/gh-pages-fork.png)

Then, from your branch manually build and push.

```shell script
make gh-pages-fork
```

Now you can view your work on `https://githubuserid.github.io/operate-first.github.io`

#### Previewing multiple PRs on GitHub pages

If you've set up to preview the site on your personal GitHub pages, like the above, you can also preview multiple PR branches from your fork under separate paths. For example, for a branch named `my-branch`, would deploy under a subpath of the same name.

From your branch manually build and push.

```shell script
make gh-pages-branch
```

Now you can view your work on `https://githubuserid.github.io/operate-first.github.io/my-branch`

### Manual Site Deployment (Production GitHub Pages)

CI should deploy to GitHub pages automatically, but to manually redeploy

```shell script
make gh-pages
```

### Running on OpenShift

#### Building a containerized image

Customize `.env` file to image and source information as desired. `npm` and the `s2i` command line tool is required. [https://github.com/openshift/source-to-image](https://github.com/openshift/source-to-image)

```.env
IMAGE_REPOSITORY=quay.io/my-org/operate-first-app:latest
SOURCE_REPOSITORY_URL=git@github.com:my-org/operate-first.github.io.git
SOURCE_REPOSITORY_REF=my-branch
```

```shell script
make build
```

#### Pushing the container image

Customize `.env` file to image information and container builder.

```.env
CONTAINER_BUILDER=docker
IMAGE_REPOSITORY=quay.io/my-org/odh-dashboard:latest
```

```shell script
make push
```

#### Deploying to OpenShift

Customize `.env` file for deployment information. Required. `oc` command line tool is required.

```.env
OC_URL=https://api.my-host:6443
OC_PROJECT=operate-first
# user and password login
OC_USER=kubeadmin
OC_PASSWORD=my_password
```

or

```.env
OC_URL=https://api.my-host:6443
OC_PROJECT=operate-first
# token login
OC_TOKEN=my_token
```

Run:

```shell script
make deploy
```
