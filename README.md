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

### Cordova plugins in browser
Some cordova plugis has special code that should handle *browser* platform. Unfortunatly *ionic serve* do not use them. In order to use cordova plugin dedicated for browsers run
`ionic cordova run browser`
