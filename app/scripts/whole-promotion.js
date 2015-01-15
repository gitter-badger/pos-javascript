'use strict';

var _ = require('lodash');
var SimpleDiscount = require('./promotion/simple-discount');

var WholeDiscount = (function () {
    function WholeDiscount(name, discount, barcodes) {
        SimpleDiscount.call(this, name, discount);
        this.barcodes = barcodes || [];
    }

    WholeDiscount.prototype = Object.create(SimpleDiscount.prototype);
    WholeDiscount.prototype.constructor = WholeDiscount;

    WholeDiscount.prototype.getPromotionMoney = function (cartItems) {
        var promotionMoney = 0.00;
        var self = this;

        _.forEach(cartItems, function (cartItem) {
            if (!_.contains(self.barcodes, cartItem.item.getBarcode())) {
                promotionMoney += cartItem.calculateTotal();
            }

        });
        return promotionMoney - (promotionMoney * self.discount);
    };

    return WholeDiscount;
})();

module.exports = WholeDiscount;
