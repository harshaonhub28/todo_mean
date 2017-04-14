var configValues = require('./config');

module.exports = {
  dbConnection :function (){
    return `mongodb://${configValues.username}:${configValues.password}@ds151450.mlab.com:51450/my_db`
  }
}
