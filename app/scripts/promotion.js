'use strict';
var _ = require('lodash');

var Promotion = (function () {

  function Promotion (name, discount, brand) {
    this.name = name;
    this.discount = discount;
    this.brand = brand;
  }

  Promotion.prototype.getPromotionString = function (cartItems) {
    var promotionMoney = this.getPromotionMoney(cartItems);
    return '名称：' + this.name + '，金额：' + promotionMoney.toFixed(2) + '元\n';
  };

  Promotion.prototype.getPromotionMoney = function (cartItems) {
    var promotionMoney = 0.00;
    var self = this;
    _.forEach(cartItems, function(cartItem) {
      if(cartItem.item.getBrand() === self.brand) {
        promotionMoney += cartItem.calculateTotal();
      };
    });
    return promotionMoney - (promotionMoney * self.discount);
  };

  return Promotion;
})();

module.exports = Promotion;
