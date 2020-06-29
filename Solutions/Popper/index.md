---
layout: default
title: Popper Solution
nav_order: 7
has_children: true
parent: Home
has_toc: false
---
# Overview

While Docker has many advantages over the script solution, there are still areas where it is lacking. Mainly, it lacks the inclusion of verification and validation. Verification is the process of checking that software achieves a given task without bugs. This usually boils down to static testing. Validation checks whether software fulfills given requirements by testing inputs and analyzing ouputs <a href= "/Trust-Tools/references.html">[1]</a>.

Popper provides a common framework for describing all dependencies and artifacts for a given experiment. An experiment is Popperized" if it contains the following <a href= "/Trust-Tools/references.html">[2]</a>:
* Experimental code
* Experiment orchestration code
* References to data dependencies
* Experiment parameters
* Validation criteria and results

Popper is very similar to Docker, but defines a workflow and enumerates the steps of running an experiment in an <code>wf.yml</code> file. Along with laying out the steps to run the experiment, popper can handle experimental logic with a <code>travis.yml</code> file containing a list of tests.

The basis of Popper is the <code>wf.yml</code> file. Here is the general structure a <code>wf.ym</code> may have <a href= "/Trust-Tools/references.html">[3]</a>:
<style>
pre code {
  display: block;
  padding: 10px;
  font-size: 12px;
} 
</style>
<pre><code>steps:
# download CSV file with data on global CO2 emissions
- id: download
  uses: docker://byrnedo/alpine-curl:0.1.8
  args: [-LO, https://github.com/datasets/co2-fossil-global/raw/master/global.csv]

# obtain the transpose of the global CO2 emissions table
- id: get-transpose
  uses: docker://getpopper/csvtool:2.4
  args: [transpose, global.csv, -o, global_transposed.csv]
</code></pre>

The structure of the <code>wf.yml</code> is just a basic list of steps. However, there are many attributes that can go into each of the different steps an experiment may have.

 To learn more information about Popper and the configuration options for the <code>wf.yml</code> file, visit Popper's documentation page [here](https://popper.readthedocs.io/en/latest/index.html).
## Installation

To get started with Popper, you will first need to have Docker installed. Visit the [Docker Overview Page](/Trust-Tools/Solutions/Docker/) to get docker installed.

Popper provides a pip package for installation. To be sure pip will work, it is recommended to use a virtual environment. The following outlines steps for a linux system, but the same can be achieved for windows and mac.
<pre><code>mkdir ./virtualenvs
apt-get install virtualenvs
source ./virtualenvs/popper/bin/activate
pip install popper</code></pre>

To verify the installation worked, run <code>popper scaffold</code>. This will download an example popper workflow. You can then run this workflow with <code>popper run -f wf.yml</code>.