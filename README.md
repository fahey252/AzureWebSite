# AzureWebSite

Training website deployed to Azure.  <http://fahey.azurewebsites.net>

## Development
  * Will need to create a .env file in the project root directory with the following contents to run locally (for the donenv npm module).
  ```
  SendGridApiKey='Your_SendGrid_API_Key'
  SendGridCCEmails='List_Of_Email_Addresses'
  ```

## Deployment
  * Do a Push via git with a remote set to the correct Azure Source Control.
  ```bash
  $ git push azure master
  ```

##Emails
  * ee4e3d770ab946dacd5a@cloudmailin.net - Web lead requests need to be forwarded here.

##Links
  * <http://fahey.azurewebsites.net>
  * <https://cfahey@fahey.scm.azurewebsites.net/Fahey.git>
  * <https://github.com/fahey252/AzureWebSite.git>