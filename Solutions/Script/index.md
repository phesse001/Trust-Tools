---
layout: default
title: Script Solution
nav_order: 1
has_children: true
parent: Home
has_toc: false
---
# Overview

This solution uses a culmination of scripts to automate installing all the dependencies, running the experiment, and genererating an output file with the results from the experiment. The general idea is to automate all tasks involved in an experiement, making it possible to get results by running a single script.

A script solution typically is just a file directory containing multiple scripts, with one script being used to orchestrate the entire experiment. Here is an example of what a script solution may look like:


├── SOTF.bib

├── SOTF.tex

├── correct.txt

├── madness.sh

├── paper.sh

├── run.sh

└── table.py

There are a variety of different scripts that accomplish different parts of the experiment. For example, <code>madness.sh</code> runs the experiment and <code>paper.sh</code> generates a paper with the results of the experiment. The <code>run.sh</code> will run both of these and use the other files in the directory as arguments.

This solution suffers from potential code rot and dependency issues. This is due to all the scripts being written on a particular machine and the experiment depends on the specific versions of sofware packages, which could cause compatibility issues in the future if the packages become deprecated.

The sofware packages required for a script solution are dependent on the experiment being run. To replicate the March Madness Experiment the following packages are required:
* g++
* Cmake
* Installtexlive-latex-recommended
* Installtexlive-publishers
* Python 3.6

For a Debian system you can run the following commands to download these packages

<code style="display:block;">apt-get update<br>
apt-get install g++<br>
apt-get install git<br>
apt-get install cmake<br>
apt-get install texlive-latex-recommended<br>
apt-get install texlive-publishers<br>
apt-get install python3.6</code>