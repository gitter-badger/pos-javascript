'use strict';
var Promotion = require('./promotion');
var SimpleDiscount = (function () {
    function SimpleDiscount(name, discount) {
        this.name = name || '';
        this.discount = discount || 1;
    }
    SimpleDiscount.prototype = Object.create(Promotion.prototype);
    SimpleDiscount.prototype.constructor = SimpleDiscount;

    SimpleDiscount.prototype.buildPromotionName = function () {
        return this.name;
    };
    return SimpleDiscount;
})();

module.exports = SimpleDiscount;
