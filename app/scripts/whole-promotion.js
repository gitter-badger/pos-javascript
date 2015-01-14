'use strict';
var _ = require('lodash');

var WholeDiscount = (function () {
  function WholeDiscount (name, discount, barcodes) {
    this.name = name;
    this.discount = discount;
    this.barcodes = barcodes || [];
  }

  WholeDiscount.prototype.getPromotionString = function (cartItems) {
    var promotionMoney = this.getPromotionMoney(cartItems);
      console.log(promotionMoney);
    return '名称：' + this.name + '，金额：' + promotionMoney.toFixed(2) + '元\n';
  };

  WholeDiscount.prototype.getPromotionMoney = function (cartItems) {
    var promotionMoney = 0.00;
    var self = this;

      _.forEach(cartItems, function (cartItem) {
        if (!_.contains(self.barcodes, cartItem.item.getBarcode())) {
          promotionMoney += cartItem.calculateTotal();
      }

    });
      console.log(promotionMoney);
    return promotionMoney - (promotionMoney * self.discount);
  };

  return WholeDiscount;
})();

module.exports = WholeDiscount;
