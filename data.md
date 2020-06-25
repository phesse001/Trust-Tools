---
layout: default
title: Data
nav_order: 3
---
## Data
### Source
All of the data used in this experiment was sourced from [masseyratings.com](). The data can be found by navigating to the data section, which will bring up a list of different sports and the years their season's were played in. The data used in this experiment came from

![](/Trust-Tools/assets/images/college_basketball.PNG?raw=true)

 After clicking on 2019, you will be redirected to a page with different options for the divisions of teams.


The options used to get our data are 'NCAA', 'NCAA D1', 'ALL'. You will finally be given options to pick how you want the data formatted. For the games, we went with 'All', 'Matlab Games'. For the teams we again did 'All' and then 'Matlab Teams'.

### Format

#### __Games__

The raw data for games is formatted as follows: Days, Date, TeamID, Field1, Score1, Team2ID, Field2, Score2. The only really ambiguous data section is 'Field'. This simply indicates whether a team played home or away. A 1 indicates they played at home and a -1 indicates they played away.

#### __Teams__

The raw data for teams is formatted as follows: TeamID, Team Name.
