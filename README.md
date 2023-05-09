
# Partnerize UI Acceptance Tests

1. The project includes a login page and user registration feature.
2. The project features an end-to-end journey for popular products, implemented using the BDD Cucumber Mapping framework and the Mapping concept.


## Setting up the project

## Pre-requisites:

Download and unzip the project.
Also obtain access to the framework through the Github link.

https://github.com/Sun143aaron/PartnerizeTestBDD.git


"Please ensure that you have installed Node.js and Cypress on your local machine before running the project. Additionally, Java-8 is required to generate Allure reports."

## Installation & Plugin:

The Installation guide for Cypress can be found here: https://docs.cypress.io/guides/getting-started/installing-cypress
The Installation guide for Allure-report can be found here: https://github.com/Shelex/cypress-allure-plugin

## Running the test: 
 - Open the terminal and run: npx cypress open (select appropriate browser and feature file to execute)
 - Open the terminal and run: npm run cypress:execution (Headless)

## Allure-report command (You can find detail in package.json)

 - Open the terminal and follow these steps for the first time:
1. Run the command "npm run runHeaded" to execute all the test cases.
2. Run the command "npm run allure:report" to generate the allure-results folder at the project level.
3. Run the command "npm run launchReport" to generate the allure-report folder at the project level.

After finishing the above steps, you need to run the following command every time before following steps 1-3:
* Run the command "npm run pretest".

## Execution Recording/Screenshots:
Videos and screenshots of the execution can be found in the directories below on your machine:
        ./cypress/videos
        ./cypress/screenshots

## Contributors:
   Sunil Baria

# Note:

If you encounter any issues with the project, please don't hesitate to contact me. I'll be more than happy to assist you.

###########################################################################