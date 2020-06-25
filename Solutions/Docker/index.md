---
layout: default
title: Docker Solution
nav_order: 4
has_children: true
parent: Home
has_toc: false
---
<head>
<style>
pre code {
  display: block;
  padding: 10px;
  font-size: 12px;
} 
</style>
</head>
# Overview

Software containters provide a way of capturing a specific environment in an executable file system. This comes with many advantages over the script solution.

You no longer have to worry about the issue of code rot, as the environment you programmed in and software packages will always be the same. Containers are also portable, allowing you to publish your experiment for others to run and build upon.
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<img src="/Trust-Tools/assets/images/docker_image.png" height="200" width="200" >

Docker is the leading software used to encapsulate environment variables. Docker can be installed on Mac, Linux, and Windows with Hyper-V.

Once Docker is installed an [image](https://jfrog.com/knowledge-base/a-beginners-guide-to-understanding-and-building-docker-images/#:~:text=A%20Docker%20image%20is%20a,publicly%20with%20other%20Docker%20users.) can be created from a Dockerfile or pulled from [DockerHub](https://docs.docker.com/docker-hub/#:~:text=Docker%20Hub%20is%20a%20service,Push%20and%20pull%20container%20images.&text=Builds%3A%20Automatically%20build%20container%20images,push%20them%20to%20Docker%20Hub.). An image defines your environment and can be modified to have any software packages you need and run specified scripts.

To see that your image was successfully created you can run <code>docker images</code> to list all the images on your machine. To run an image, call <code>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</code>.

For more information on how to use docker, visit [Docker's Documentation Page](https://docs.docker.com/).

## Installation
* *All information found here came from (Docker Documentation Page)[https://docs.docker.com/]* <a href= "/Trust-Tools/references.html">[4]</a>

__Mac__

Requirements
* Mac hardware must be a 2010 or a newer model
* macOS must be version 10.13 or newer
* At least 4 GB of RAM
* VirtualBox prior to version 4.3.30 must not be installed as it is not compatible with Docker Desktop

Go to [DockerHub](https://hub.docker.com/editions/community/docker-ce-desktop-mac/) and click Get Docker

Then double-click Docker.dmg to start the installation.

To verify Docker installed correctly, open up a terminal and run <code>docker version</code>

__Windows__

Requirements
* Windows 10, version 2004 or higher
* WSL 2 feature on Windows
* 64 bit processor
* 4GB system RAM
* BIOS-level hardware virtualization support must be enabled in the BIOS settings

Go to [DockerHub](https://hub.docker.com/editions/community/docker-ce-desktop-windows/) and click Get Docker

Then double-click <code>Docker for Windows Installer</code>

To verify Docker installed correctly, open up a terminal and run <code>docker version</code>

__Ubuntu__

There are many more steps required to install on Ubuntu. To install on Ubuntu, visit [here](https://docs.docker.com/engine/install/ubuntu/)