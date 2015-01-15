'use strict';

var Promotion = require('./promotion');

var SimpleMeetReduce = (function () {

    function SimpleMeetReduce(name, meet, reduce) {
        this.name = name;
        this.meet = meet;
        this.reduce = reduce;
    }
    SimpleMeetReduce.prototype = Object.create(Promotion.prototype);
    SimpleMeetReduce.prototype.constructor = SimpleMeetReduce;

    return SimpleMeetReduce;
})();

module.exports = SimpleMeetReduce;
