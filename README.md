# mobile-examiner-alpha
DVSA Mobile Examiner Services (GDS Alpha phase)

## Mobile Client Prototype

### Pre-requisites

* Node (v 8.9.x)
* npm (v 5.5.1)
* Ionic CLI + Cordova: `npm install -g cordova ionic`

### Get started

* `npm install`
* `ionic serve`

### Mac users

To run the app in the simulator with live code reload, run the following:
`ionic cordova emulate ios -lc --address=localhost`

### Manual Deployments

* `npm run ionic:deploy`

# Testing

## Unit testing

`npm run test`

Create new tests by appending the file with `*.spec.ts`.

## e2e Testing

Create new end-to end tests by adding *.e2e-spec.ts files to the e2e directories.

### Browser

Install the selenium driver if needed 

`npm install -g webdriver-manager`

Then start the selenium driver

`webdriver-manager update`

`webdriver-manager start`

Start the application running

`npm run serve`

Run the e2e tests

`npm run test:e2e-browser`

### Simulator 

Install appium if needed

`npm install -g appium`

Run appium

`appium`

Run the e2e tests

`npm run test:e2e-simulator`