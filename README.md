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

## Git Hooks
For each public github repo you are working on, please set up the following prepush git hook in .git/hooks/pre-push

```
  #!/bin/sh
  git secrets --scan && git log -p -n 15 | scanrepo 
```

Make sure the hook is executable (chmod +x .git/hooks/pre-push)


If you tend to commit more than you push, up the 15 to a more suitable number to cover all of your commits - you should be pushing more often though.

## Security Tools

Can you install and run the following security programs as part of your testing process:

https://github.com/awslabs/git-secrets

After installing, do a one-time set up (in each repo) with 

```
  cd /path/to/my/repo
  git secrets --install
  git secrets --register-aws
```

Run with git secrets --scan.

https://github.com/UKHomeOffice/repo-security-scanner

After installing, run with git log -p | scanrepo.
=======
### Cordova plugins in browser
Some cordova plugis has special code that should handle *browser* platform. Unfortunatly *ionic serve* do not use them. In order to use cordova plugin dedicated for browsers run
`ionic cordova run browser`
