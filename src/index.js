var nodemon = require('nodemon');

nodemon({
    script: 'src/server.js',
    ext: 'js json'
});

nodemon.on('start', function () {
    console.log('Server has started');
}).on('quit', function () {
    console.log('Server has quit');
}).on('restart', function (files) {
    console.log('Server restarted due to:', files);
});
