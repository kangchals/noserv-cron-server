process.env.NODE_ENV = 'test';

var container = require('./lib/container').getInstance();
container.init('', '', function() {});

process.on('exit', container.close);