'use strict';

var ItemMeetReduce = (function () {

  function ItemMeetReduce (name, meet, reduce, barcode) {
    this.name = name;
    this.meet = meet;
    this.reduce = reduce;
    this.barcode = barcode;
  }

  ItemMeetReduce.prototype.getPromotionString = function (cartItem) {
    var promotionMoney = this.getPromotionMoney(cartItem);
    var result = '名称：' + this.name + '，金额：' + promotionMoney.toFixed(2) +'元\n';
    return promotionMoney > 0 ? result : '';
  };

  ItemMeetReduce.prototype.getPromotionMoney = function(cartItem) {
    return cartItem.calculateTotal() >= this.meet ? this.reduce : 0;
  };

  return ItemMeetReduce;
})();

module.exports = ItemMeetReduce;
