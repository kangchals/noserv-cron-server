

exports.cronFunction = function (){
    console.log('!!!! job1 !!!!! ' + new Date());
};

exports.startRightaway = function(){return true };

exports.cronTime = function(){ return '03 * * * * 0-6' };

