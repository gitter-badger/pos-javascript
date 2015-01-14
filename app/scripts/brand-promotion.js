'use strict';
var _ = require('lodash');

var BrandPromotion = (function () {

  function BrandPromotion (name, discount, brand) {
    this.name = name;
    this.discount = discount;
    this.brand = brand;
  }

  BrandPromotion.prototype.getPromotionString = function (cartItems) {
    var promotionMoney = this.getPromotionMoney(cartItems);
    return '名称：' + this.name + '，金额：' + promotionMoney.toFixed(2) + '元\n';
  };

  BrandPromotion.prototype.getPromotionMoney = function (cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
      if(cartItem.item.getBrand() === self.brand) {
        promotionMoney += cartItem.calculateTotal();
      }
    });
    return promotionMoney - (promotionMoney * self.discount);
  };


  return BrandPromotion;
})();

module.exports = BrandPromotion;
