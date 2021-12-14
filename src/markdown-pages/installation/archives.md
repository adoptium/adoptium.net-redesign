---
path: "/installation/archives"
title: "Archive Installation"
authors: gdams
---

This guide is broken down into several subsections:

| [Linux](#linux) | [macOS](#macos) | [Windows](#windows) | [AIX](#aix) | [Solaris](#solaris)|
| :----: | :----: | :----: | :----: | :----: |

## Linux

1. Make sure you have downloaded the latest [Linux binary](./download) to a directory that will not move or be deleted, and use Terminal to cd into it.
1. Optional: use these checksum instructions to ensure the authenticity of your binary:
    ```bash
    # The command must in the same directory as the downloaded binary file
    wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
    ```
1. Extract the `.tar.gz.` You can use the following command:
    ```bash
    tar xzf <openjdk_binary>.tar.gz
    ```
1. Add this version of Java to your `PATH`
    ```bash
    export PATH=$PWD/<extracted_directory>/bin:$PATH
    ```
1. Check that Java has installed correctly:
    ```bash
    java -version
    ```

## macOS

1. Make sure you have downloaded the latest [macOS binary](./download) to a directory that will not move or be deleted, and use Terminal to cd into it.
1. Optional: use these checksum instructions to ensure the authenticity of your binary:
    ```bash
    # The command must in the same directory as the downloaded binary file
    wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
    ```
1. Extract the `.tar.gz.` You can use the following command:
    ```bash
    tar xzf <openjdk_binary>.tar.gz
    ```
1. Add this version of Java to your `PATH`
    ```bash
    export PATH=$PWD/<extracted_directory>/Contents/Home/bin:$PATH
    ```
1. Check that Java has installed correctly:
    ```bash
    java -version
    ```

## Windows

1. Make sure you have downloaded the latest [Windows binary](./download) to a directory that will not move or be deleted, and use Command Prompt to cd into it.
1. Optional: use these checksum instructions to ensure the authenticity of your binary:
    ```powershell
    certutil -hashfile <downloaded_file>.zip SHA256
    ```
1. Extract the .zip. You can use the following command:
    ```powershell
    Expand-Archive -Path .\<downloaded_file>.zip -DestinationPath .
    ```
1. Add this version of Java to your `PATH`:
    ```powershell
    set PATH=%cd%\<extracted_directory>\bin;%PATH%
    ```
1. Check that Java has installed correctly:
    ```batch
    java -version
    ```

## AIX

1. Make sure you have downloaded the latest [AIX binary](./download) to a directory that will not move or be deleted, and use Terminal to cd into it.
1. Optional: use these checksum instructions to ensure the authenticity of your binary:
    ```bash
    # The command must in the same directory as the downloaded binary file
    wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
    ```
1. Extract the `.tar.gz.` You can use the following command:
    ```bash
    gunzip -c <openjdk_binary>.tar.gz | tar xf -
    ```
1. Add this version of Java to your `PATH`
    ```bash
    export PATH=$PWD/<extracted_directory>/bin:$PATH
    ```
1. Check that Java has installed correctly:
    ```bash
    java -version
    ```

## Solaris

1. Make sure you have downloaded the latest [Solaris binary](./download) to a directory that will not move or be deleted, and use Terminal to cd into it.
1. Optional: use these checksum instructions to ensure the authenticity of your binary:
    ```bash
    # The command must in the same directory as the downloaded binary file
    wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
    ```
1. Extract the `.tar.gz.` You can use the following command:
    ```bash
    gunzip -c <openjdk_binary>.tar.gz | tar xf -
    ```
1. Add this version of Java to your `PATH`
    ```bash
    export PATH=$PWD/<extracted_directory>/bin:$PATH
    ```
1. Check that Java has installed correctly:
    ```bash
    java -version
    ```