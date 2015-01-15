'ues strict';

var SimpleDiscount = (function () {
  function SimpleDiscount (name, discount) {
    this.name = name || '';
    this.discount = discount || 1;
  }

  SimpleDiscount.prototype.getPromotionString = function (cartItems) {
      var promotionMoney = this.getPromotionMoney(cartItems);
      return '名称：' + this.buildPromotionName(cartItems) + '，金额：' + promotionMoney.toFixed(2) + '元\n';
  };

  SimpleDiscount.prototype.getPromotionMoney = function () {

  };

  SimpleDiscount.prototype.buildPromotionName = function () {
    return this.name;
  };
  return SimpleDiscount;
})();

module.exports = SimpleDiscount;
