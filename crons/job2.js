

exports.cronFunction = function () {
    console.log('!!!! job2 !!!!! ' + new Date());
};

exports.startRightaway = function(){return true };

exports.cronTime = function(){ return '04 * * * * 0-6' };

