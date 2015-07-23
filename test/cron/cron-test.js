
var assert = require('assert');
var container = require('../../lib/container').getInstance();
var restify = require('restify');

describe('schedule', function() {

    var client = null;
    var scheduleId = null;

    before(function(done) {
        container.init('', '', function(err) {

            setTimeout(done, 1000);
        });

        client = restify.createJsonClient({
            url: 'http://localhost:3337',
            version: '~1.0',
            headers: {
                'X-Noserv-Session-Token' : 'supertoken',
                'X-Noserv-Application-Id' : 'supertoken'
            }
        });
    });

    after(function(done) {
        container.close(function() {

            setTimeout(done, 2000);
        });
    });

    describe('create', function() {
        it('should create without error', function(done) {

            client.post('/1/schedule', {
                cronTIme: "function(){ return '03 * * * * 0-6' };",
                startRightaway: 'function(){return true }',
                cronFunction: "function (container) { console.log('!!!! job1 !!!!! ' + new Date());};"
            }, function(err, req, res, obj) {

                if(res.statusCode === 409) {

                    done();
                    return;
                }
                assert.equal(201, res.statusCode);
                assert(obj.createdAt);
                assert(obj.objectId);

                done(err);
            });
        });
    });

});
