# DocumentDB with MongoDB Drivers

## Local Development setup
  * Need to have [Homebrew](http://brew.sh/) installed so can easily install MongoDB is not already installed on the local machine.
  * Need to have MongoDB installed locally: <https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x>

    ```bash
    $ brew update
    $ brew install mongodb
    $ mkdir local-database  # mkes a directory in your project folder, be sure to .gitignore
    $ mongod --dbpath=local-database
    ```
  * Copy the `.env` file in the config folder and specify the values.

  ```bash
  $ cp config/.env .
  ```

## Notes
  * When deploying to an Azure Web App, create a DocumentDB with MongoDB driver support. Set an App Setting with the DocumentDB connection string in the Web App. See directions above for developing locally with MongoDB.

  ```bash
  $ azure config mode asm
  $ azure site appsetting list <WebAppName>  # i.e. <WebAppName>=DocumentDBMongoDB
  # either add the DB_ENDPOINT connection string via the Portal or by using the command below
  $ azure site appsetting add DB_ENDPOINT="mongodb endpoint from DocumentDB connection strings blade"
  # when prompted, enter the name of the WebApp
  # when prompted, hit 'Enter' to use the default deployment slot
  # to validate the App Settings can hit the endpoint: https://<sitename>.scm.azurewebsites.net/api/settings
  ```
  * When setting DocumentDB connection string, be sure to include the database name after the server name i.e. <mongodb://username:password@documentdbmongodb.documents.azure.com:10250/DatabaseName?ssl=true> or else the collection will be added to the `admin`database.
  * Was not able to connect to DocumentDB data store via Postman due to authentication problems.

## Difficulties
  * Client/tools to interact with data stored locally and once in Azure... need to installed 3rd party tools to interact with data store (Mongoclient or MongoChef installed locally).
  * To interact with data on Azure, would need to install 3rd prrty tool on am external VM then interact so can connect over a Mongo port.
  * Would be nice if Azure Storage Explorer could interact with DocumentDB's

## Links
  * <https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x>
  * <http://mongodb.github.io/node-mongodb-native/2.2/quick-start>
  * <https://azure.microsoft.com/en-us/documentation/articles/documentdb-mongodb-guidelines>
  * <https://msdn.microsoft.com/en-us/library/azure/mt622086.aspx>
