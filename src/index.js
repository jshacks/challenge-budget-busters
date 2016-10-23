var mongoose = require('mongoose');

var MONGO_DB;
var DOCKER_DB = process.env.DB_PORT;
if ( DOCKER_DB ) {
  MONGO_DB = DOCKER_DB.replace( 'tcp', 'mongodb' ) + '/budgetbusters';
} else {
  MONGO_DB = process.env.MONGODB;
}
var retry = 0;
mongoose.connect(MONGO_DB);
