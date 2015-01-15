'use strict';

var _ = require('lodash');
var SimpleMeetReduce = require('./promotion/simple-meet-reduce');

var BrandMeetReduce = (function () {
    function BrandMeetReduce(name, meet, reduce, brand) {
        SimpleMeetReduce.call(this, name, meet, reduce);
        this.brand = brand;
    }

    BrandMeetReduce.prototype = Object.create(SimpleMeetReduce);
    BrandMeetReduce.prototype.constructor = BrandMeetReduce;


    BrandMeetReduce.prototype.getPromotionMoney = function (cartItems) {
        var promotionMoney = 0.00;
        var self = this;
        _.forEach(cartItems, function (cartItem) {
            if (cartItem.item.getBrand() === self.brand) {
                promotionMoney += cartItem.calculateTotal();
            }
        });
        return promotionMoney >= self.meet ? self.reduce : 0;
    };

    return BrandMeetReduce;
})();

module.exports = BrandMeetReduce;
