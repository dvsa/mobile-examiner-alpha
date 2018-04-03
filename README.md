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

* `npm install`
* `ionic serve`

### Mac users

To run the app in the simulator with live code reload, run the following:
`ionic cordova emulate ios -lc --address=localhost`

### Manual Deployments

* `npm run ionic:deploy`
