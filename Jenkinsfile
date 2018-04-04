@Library('MesSharedLibrary@master')
import aws.dvsa.mes.Globals
import aws.dvsa.mes.CommonFunctions
import aws.dvsa.mes.GitFunctions
import aws.dvsa.mes.MobileFunctions
//------------------------------------------
def Globals         = new Globals()
def CommonFunctions = new CommonFunctions()
def GitFunctions    = new GitFunctions()
def MobileFunctions = new MobileFunctions()

String branch_name          = "${env.BRANCH_NAME}"
String ionic_app_id         = Globals.MOBILE_APP_ID
String nodejs_installation  = Globals.MOBILE_NODE_JS
String mobile_config_branch = "master"
//----------------------------------------------------
node ('dvsa-mes-mgmt') {
  currentBuild.description = "BRANCH: ${branch_name}"
  // clear workspace
  deleteDir()
  // declare workspace
  env.WSPACE = pwd()
  // wrappers
  timestamps {
  ansiColor("xterm") {
  wrap([$class: "BuildUser"]) {
    stage("checkout") {
      CommonFunctions.log("info", "STAGE: Checkout")
      GitFunctions.git_check_out(Globals.MOBILE_REPO, branch_name, Globals.MOBILE_NAME, Globals.GITHUB_MOBILE_CREDS)
    }
    stage("tests") {
      CommonFunctions.log("info", "STAGE: Tests")
    }
    stage("build") {
      if(branch_name == "develop" || branch_name == "origin/develop"){
          CommonFunctions.log("info", "STAGE: Build")
          // install ionic
          MobileFunctions.ionic_cli_install(nodejs_installation)
          // get current commit hash of the ios_app branch
          String commit_hash = GitFunctions.git_get_commit_hash(Globals.MOBILE_NAME)
          // build
          dir(Globals.MOBILE_NAME) {
            MobileFunctions.ionic_pro_push(nodejs_installation, Globals.MOBILE_DEPLOYER_KEY, branch_name, commit_hash, ionic_app_id)
          }
          CommonFunctions.log("info", "It takes a couple of minutes to build and publish the app to the IonicPro service.")
        }


        // IONIC APP info for Ionic View
        CommonFunctions.shout(ionic_app_id, "35m", Globals.MOBILE_NAME.toUpperCase()+" ID", 26)
  }}}} //ansiColor //BuildUser //timestamps
  // clear workspace
  deleteDir()
}
