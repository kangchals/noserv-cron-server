

exports.cronFunction = function (container) {
    console.log('!!!! job2 !!!!! ' + new Date());
};

exports.startRightaway = function(){return true };

exports.cronTime = function(){ return '03 * * * * 0-6' };

