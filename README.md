
# Partnerize UI Acceptance Tests

1. The project includes a login page and user registration feature.
2. The project features an end-to-end journey for popular products, implemented using the BDD Cucumber Mapping framework and the Mapping concept.


## Setting up the project

## Pre-requisites:

Download and unzip the project
Also get access for framework via Github link:

https://github.com/Sun143aaron/PartnerizeTestBDD.git


Please, ensure you have 'Node Js' and cypress installed in your local machine.
Require Java-8 for Allure report

## Installation & Plugin:

The Installation guide for Cypress can be found here: https://docs.cypress.io/guides/getting-started/installing-cypress
The Installation guide for Allure-report can be found here: https://github.com/Shelex/cypress-allure-plugin

## Running the test: 
 - Open the terminal and run: npx cypress open (select appropriate browser and feature file to execute)
 - Open the terminal and run: npm run cypress:execution (Headless)

## Allure-report command (You can find detail in package.json)

 - Open the terminal and run following step by step for the first time
    1. npm run runHeaded  ( Run all the tst cases)
    2. npm run allure:report (Generate allure-results folder at project level)
    3. npm run launchReport (Generate allure-report folder at project level)

 - After finished above step we need to run below code everytime before follow step 1-3
    * npm run pretest

## Execution Recording/Screenshots: 
Video/Screenshots of execution could be found at the directory below on your machine:
        ./cypress/videos
        ./cypress/screenshots

## Contributors:
Sunil

# Note:

Any issue with the project please reach me out, happy to help.

###########################################################################