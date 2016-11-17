# Azure/Swagger - Node.js 

## Links
  * [Swagger Node Azure Tutorial](https://docs.microsoft.com/en-us/azure/app-service-api/app-service-api-nodejs-api-app)
  * [Swagger Node Azure Git Repo](https://github.com/Azure-Samples/app-service-api-node-contact-list.git)
  * [Azure API Management Gateway](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-import-api)
  * [CORS](https://docs.microsoft.com/en-us/azure/app-service-api/app-service-api-cors-consume-javascript)
  * [API Management](https://docs.microsoft.com/en-us/azure/api-management/api-management-get-started)
  * <http://localhost:8000/contacts>, <http://localhost:8000/swagger>, <http://localhost:8000/docs>
  * [Azure Site With API](http://fahey-api-app.azurewebsites.net/swagger)

# Steps
  * Generate swagger.json definition and add to project.
  * Run `yo swaggerize`.  <https://github.com/krakenjs/generator-swaggerize>
  

## Getting Started Scripts
```
# from: https://docs.microsoft.com/en-us/azure/app-service-api/app-service-api-nodejs-api-app
$ npm install -g yo
$ npm install -g generator-swaggerize

# in project root
$ yo swaggerize    # for new projects that need scaffolded only
$ npm install --save jsonpath
$ npm install --save swaggerize-ui
$ cp -r lib ContactList/
```
