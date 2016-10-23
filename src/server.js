var Hapi = require('hapi');
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

var SERVER_PORT = process.env.SERVER_PORT || 8080;
var server = new Hapi.Server();
server.connection({ port: 8080 });

server.register(require('inert'), function(err) {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: true
            }
        }
    });

    server.start(function(err) {
        if (err) {
            throw err;
        }

        console.log('Server running at ' + server.info.uri);
    })
});
