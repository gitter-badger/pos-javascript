'use strict';

var SimpleMeetReduce = require('./promotion/simple-meet-reduce');
var _ = require('lodash');

var WholeMeetReduce = (function () {

    function WholeMeetReduce(name, meet, reduce, barcodes) {
        SimpleMeetReduce.call(this, name, meet, reduce);
        this.barcodes = barcodes;
    }

    WholeMeetReduce.prototype = Object.create(SimpleMeetReduce.prototype);
    WholeMeetReduce.prototype.constructor = WholeMeetReduce;

    WholeMeetReduce.prototype.getPromotionMoney = function (cartItems) {
        var promotionMoney = 0.00;
        var self = this;
        _.forEach(cartItems, function (cartItem) {
            if (!_.contains(self.barcodes, cartItem.item.getBarcode())) {
                promotionMoney += cartItem.calculateTotal();
            }

        });
        return promotionMoney >= self.meet ? self.reduce : 0;
    };

    return WholeMeetReduce;
})();

module.exports = WholeMeetReduce;
