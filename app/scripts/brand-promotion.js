'use strict';

var _ = require('lodash');
var SimpleDiscount = require('./promotion/simple-discount');

var BrandPromotion = (function () {

    function BrandPromotion(name, discount, brand) {
        SimpleDiscount.call(this, name, discount);
        this.brand = brand;
    }

    BrandPromotion.prototype = Object.create(SimpleDiscount.prototype);
    BrandPromotion.prototype.constructor = BrandPromotion;

    BrandPromotion.prototype.getPromotionMoney = function (cartItems) {
        var promotionMoney = 0.00;
        var self = this;
        _.forEach(cartItems, function (cartItem) {
            if (cartItem.item.getBrand() === self.brand) {
                promotionMoney += cartItem.calculateTotal();
            }
        });
        return promotionMoney - (promotionMoney * self.discount);
    };

    return BrandPromotion;
})();

module.exports = BrandPromotion;
