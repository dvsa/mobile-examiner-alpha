# mobile-examiner-alpha

DVSA Mobile Examiner Services (GDS Alpha phase)

## Mobile Client Prototype

### Pre-requisites

* Node (v 8.9.x)
* npm (v 5.5.1)
* Ionic CLI + Cordova: `npm install -g cordova ionic`
* Security
  * [Git secrets](https://github.com/awslabs/git-secrets)
  * [ScanRepo](https://github.com/UKHomeOffice/repo-security-scanner)

### Get started

* Set up your environment variables - https://wiki.i-env.net/display/MES/Application+environment+variables
* `npm install`
* `ionic serve`

### Mac users

To run the app in the simulator with live code reload, run the following:
`ionic cordova emulate ios -lc --address=localhost`

### Manual Deployments

* `npm run ionic:deploy`

### Security Tools

**NOTE: There is currently an issue using bash v4 with git secrets, in that it will only allow single file commits. This has been reported numerous times but support for this tool seems to be limited and where an earlier fix should have resolved this problem, it is still an issue.**
[git secrets issues](https://github.com/awslabs/git-secrets/issues)

After installing git secrets as part of the pre-requisites, run a one-time set up (in each repo) with

```
  cd /path/to/my/repo
  git secrets --install
  git secrets --register-aws
```

Run with git secrets --scan.

After installing scanRepo as part of the pre-requisites, run with git log -p | scanrepo.

=======

### Cordova plugins in browser

Some cordova plugis has special code that should handle _browser_ platform. Unfortunatly _ionic serve_ do not use them. In order to use cordova plugin dedicated for browsers run
`ionic cordova run browser`

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