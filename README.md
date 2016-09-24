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

  ```bash
  $ git push azure master
  ```

# Resources
  * [Google Web Starter Kit](https://developers.google.com/web/tools/starter-kit/?hl=en)
  * [SendGrid](https://sendgrid.com) - Created via the Azure Portal

##Links
  * <https://fahey.azurewebsites.net>
  * <https://github.com/fahey252/AzureWebSite.git>
