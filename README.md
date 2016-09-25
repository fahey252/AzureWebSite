# AzureWebSite

Training website deployed to Azure.  <http://fahey.azurewebsites.net>

## Development Environment Setup
  * Run:

  ```bash
  $ bash dev-environment-setup.sh
  ```
  * Will need to copy the /config/.env file to the project root directory and update the values to run locally (for the donenv npm module).

## Deployment
  * Do a push via Git with a remote set to the correct Azure Source Control.
  * Deployment source is setup to look for pushes to master branch in GitHub repo.

  ```bash
  $ git push
  ```

# Resources
  * [Google Web Starter Kit](https://developers.google.com/web/tools/starter-kit/?hl=en)
  * [SendGrid](https://sendgrid.com) - Created via the Azure Portal
  * [Multi Step Form/Wizard](https://scotch.io/tutorials/angularjs-multi-step-form-using-ui-router)

##Links
  * <https://fahey.azurewebsites.net>
  * <https://github.com/fahey252/AzureWebSite.git>
