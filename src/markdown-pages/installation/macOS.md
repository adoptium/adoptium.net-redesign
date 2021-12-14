---
path: "/installation/macOS"
title: "macOS PKG installer packages"
authors: gdams
---

Temurin macOS installer packages are available as standard .pkg files, which can be run with an interactive user interface or run silently from the Terminal command line.

## GUI installation

Instructions for running an interactive installation using the macOS PKG installer:

1. [Download](./download) the `.pkg` file.
1. Navigate to the folder that contains the file and open it to launch the installation program or drag the icon to your Application folder.
1. The Introduction screen indicates the target location for the installation, which you can change later in the install process. Click Continue.
1. Read the license, click Continue and accept the license if you are happy with the terms.
1. Change the target location for the installation. Click Install to complete the installation.

## Command-line installation

A silent installation allows you to install the macOS package without user interaction, which can be useful for widescale deployment. You must have administrator privileges. Follow these steps:

1. [Download](./download) the `.pkg` file.
1. Launch the Terminal app (`terminal.app`).
1. Run the following command:
    ```bash
    installer -pkg <path_to_pkg>/<pkg_name>.pkg -target /
    ```
1. Enter the Administrator password
1. Temurin installs to `/Library/Java/JavaVirtualMachines/temurin-<version>.<jdk|jre>/`