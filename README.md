# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ? 
- Which feature did you develop and why ? 
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ? 



## Solved bugs 
# Can't access to Projects 
When you click on a project name, you will have an error screen. I can't find the project name (undefined project.name).
To fix this problem, we have to wait the result of the async method, during this time we let a loader.

# Can't update User information
When you add new informations to user and click on update. Toast message said that's update. But when you comeback to user informations, that's not the case.
To fix this problem, I change the behavior or the button

# Can't connect to new user created by UI
When you create a new user with the UI. User is created. Then, you logged out and try to log with the new user created. You can't log in because User is not know in the console log. 
I found that user and password are set in lower case. So this lead to create a "false" account. I simply remove this function to not alterate the authentification process. 

# Reduce query and display user name
When you display a project, the request start to retrieve all projects from the database but you only need one result because project name are unique.
When you create a user, and list all users, name of users are not displayed.
I have noticed that model from database and attributes are not correctly set for user (username != name).


## New feature
I add a small dashboard that count number of projects, of users, and activities. Add a feed of users from the input activity next time.

## Feedback about the code / architecture of the project and difficulties 
The code at some point is understable if you master the React framework, and in some file it is completly unreadable.
The non-typed language doesn't help at all and so the debugging too. 

The code is well structured. I clearly have some facility to navigate and understand how responsability is shared.