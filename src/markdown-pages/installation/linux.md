---
path: "/installation/linux"
title: "Linux (RPM/DEB) installer packages"
authors: gdams
---

Temurin RPM and DEB packages are available for installing on your favourite Linux distribution.

## Deb installation on Debian or Ubuntu

You need the codename of your Debian or Ubuntu version. It is usually recorded in `/etc/os-release` and can be extracted on Debian by running:

```bash
cat /etc/os-release | grep VERSION_CODENAME | cut -d = -f 2
```

and on Ubuntu by running:

```bash
cat /etc/os-release | grep UBUNTU_CODENAME | cut -d = -f 2
```

1. Ensure the necessary packages are present:
    ```bash
    sudo apt-get install -y wget apt-transport-https gnupg
    ```
1. Download the Eclipse Adoptium GPG key:
    ```bash
    wget https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo apt-key add -
    ```
1. Configure the Eclipse Adoptium apt repository by replacing the values in angle brackets:
    ```bash
    echo "deb https://packages.adoptium.net/artifactory/deb <codename> main" | sudo tee /etc/apt/sources.list.d/adoptium.list
    ```
1. Install the Temurin version you require:
    ```bash
    apt-get update # update if you haven't already
    apt-get install temurin-17-jdk
    ```

## Centos/Rhel/Fedora Instructions

1. Add the RPM repo to `/etc/yum.repos.d/adoptium.repo` making sure to change the Centos version if you are not using Centos 7. RPM’s are also available for Rhel and Fedora. To check the full list of versions supported take a look at https://packages.adoptium.net/ui/repos/tree/General/rpm.
    ```bash
    cat <<EOF > /etc/yum.repos.d/adoptium.repo
    [Adoptium]
    name=Adoptium
    baseurl=https://packages.adoptium.net/artifactory/rpm/centos/7/$(uname -m)
    enabled=1
    gpgcheck=1
    gpgkey=https://packages.adoptium.net/artifactory/api/gpg/key/public
    EOF
    ```
1. Install the Temurin version you require:
    ```bash
    yum update # update if you haven't already
    yum install temurin-17-jdk
    ```

## openSUSE/Sles Instructions

1. Import the RPM repo making sure to change the openSUSE version if you are not using OpenSUSE 15.0. RPM’s are also available for Sles 12 and 15. To check the full list of versions supported take a look at https://packages.adoptium.net/ui/repos/tree/General/rpm.
    ```bash
    zypper ar -f https://packages.adoptium.net/artifactory/rpm/opensuse/15.0/$(uname -m) adoptopenjdk
    ```
1. Install the Temurin version you require:
    ```bash
    zypper install temurin-17-jdk
    ```