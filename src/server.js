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

var Schema = mongoose.Schema;
var proposalSchema = new Schema({
    id: String,
    name: String,
    comment: String,
    value: Number
});
var proposal = mongoose.model('proposal', proposalSchema);

var SERVER_PORT = process.env.SERVER_PORT || 8080;
var server = new Hapi.Server();
server.connection({ port: SERVER_PORT });

server.register(require('inert'), function(err) {
    if (err) {
        throw err;
    }

    var sendError = function(reply, err) {
        reply({
            error: err.name,
            message: err.message,
            code: err.code
        }).code(500);
    };

    server.route({
        method: 'GET',
        path: '/api/init',
        handler: function(request, reply) {
            mongoose.connection.db.dropCollection('proposals', function(err, result) {
                console.log(err);
                if (err) {
                    sendError(reply, err);
                } else {
                    reply(result);
                }
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/api/proposals',
        handler: function(request, reply) {
            var params = {};
            if (request.query.id) {
                params.id = request.query.id;
            }
            proposal.find(params, function(err, proposals) {
                if (err) {
                    sendError(reply, err);
                } else {
                    reply(proposals);
                }
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/api/proposals/count',
        handler: function(request, reply) {
            proposal.aggregate([{
                $group: {
                    _id: '$id',
                    count: { $sum: 1 }
                }
            }], function(err, proposals) {
                if (err) {
                    sendError(reply, err);
                } else {
                    reply(proposals);
                }
            });
        }
    });

    server.route({
        method: 'POST',
        path: '/api/proposals',
        handler: function(request, reply) {
            var obj = proposal(request.payload);
            obj.save(function(err) {
                if (err) {
                    sendError(reply, err);
                } else {
                    reply(obj);
                }
            });
        }
    });

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
