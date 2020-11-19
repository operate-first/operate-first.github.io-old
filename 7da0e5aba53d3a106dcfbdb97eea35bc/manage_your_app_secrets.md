# Secret Management

Secret management is handled using the KSOPs plugin. Use [sops](https://github.com/mozilla/sops) to encrypt your secrets in vcs.

## Overview: KSOPs
`KSOPS`, or kustomize-SOPS, is a [kustomize](https://github.com/kubernetes-sigs/kustomize/) plugin for SOPS encrypted resources. `KSOPS` can be used to decrypt any Kubernetes resource, but is most commonly used to decrypt encrypted Kubernetes Secrets and ConfigMaps. As a [kustomize](https://github.com/kubernetes-sigs/kustomize/) plugin, `KSOPS` allows you to manage, build, and apply encrypted manifests the same way you manage the rest of your Kubernetes manifests.

## Requirements
- [Go](https://github.com/golang/go)
- [kustomize](https://github.com/kubernetes-sigs/kustomize/) built with Go (See [details below](#kustomize-go-plugin-caveats))
- [SOPS](https://github.com/mozilla/sops)
- gpg

See [versions](versions.md) to download the appropriate version of SOPS, Kustomize, and KSOPS.

### 0. Verify Requirements
Before continuing, verify your installation of [Go](https://github.com/golang/go), [SOPS](https://github.com/mozilla/sops), and `gpg`. Below are a few non-comprehensive commands to quickly check your installations:

```bash
# Verify that the latest version of Go is installed i.e. v1.13 and above
go version

# Verify that your $GOPATH is set
go env

# Verify SOPS is installed
sops --version

# Verify gpg is installed
gpg --help
```

### 1. Download KSOPS

```bash
# export GO111MODULE=on
go get -u github.com/viaduct-ai/kustomize-sops
# cd into the root directory
cd $GOPATH/src/github.com/viaduct-ai/kustomize-sops
```

### 2. Install (or Reinstall) the Latest kustomize via Go

```bash
# KSOPS is built with latest kustomize
# If you want to change versions, update the installation script with your desired version and make sure to check that the KSOPS tests still pass
# If you want to change versions below kustomize v3.3.0, use the KSOPS v1.0 or go-1.12 release!
make kustomize
```

### 3. Setup kustomize Plugin Path

```bash
# Don't forget to define XDG_CONFIG_HOME in your .bashrc/.zshrc
echo "export XDG_CONFIG_HOME=\$HOME/.config" >> $HOME/.bashrc
source $HOME/.bashrc
```

### 4. Build and Install KSOPS Plugin

```bash
make install
```

### 5. Configure SOPS via .sops.yaml

`KSOPS` relies on the `SOPS` creation rules defined in `.sops.yaml`. To make encrypted secrets more readable, we suggest using the following encryption regex to only encrypt `data` and `stringData` values. This leaves non-sensitive fields, like the secret's name, unencrypted and human readable.

You will have to modify `.sops.yaml` if you want to use your key management service by providing the correct gpg fingerprint. You can customize this file according to the type of secrets you want to encrypt.

```yaml
creation_rules:
  - encrypted_regex: '^(data|stringData)$'
    # Specify kms/pgp/etc encryption key
    pgp: '<gpg-fingerprint>'
    # Optionally you can configure to use a providers key store
    # kms: XXXXXX
    # gcp_kms: XXXXXX
```

### 6. Create a Resource

```bash
# Create a local Kubernetes Secret
cat <<EOF > secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: YWRtaW4=
  password: MWYyZDFlMmU2N2Rm
EOF
```

### 7. Encrypt the Resource

```bash
# Encrypt with SOPS CLI
# Specify SOPS configuration in .sops.yaml
sops -e secret.yaml > secret.enc.yaml
```

### 8. Define KSOPS kustomize Generator
```bash
# Create a local Kubernetes Secret
cat <<EOF > secret-generator.yaml
apiVersion: viaduct.ai/v1
kind: ksops
metadata:
  # Specify a name
  name: example-secret-generator
files:
  - ./secret.enc.yaml
EOF
```

### 9. Create the kustomization.yaml
[Read about kustomize plugins](https://github.com/kubernetes-sigs/kustomize/blob/master/docs/plugins/README.md)

```bash
cat <<EOF > kustomization.yaml
generators:
  - ./secret-generator.yaml
EOF
```
