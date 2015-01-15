'use strict';

var Promotion = (function () {
    function Promotion () {}
    Promotion.prototype.getPromotionString = function (cartItems) {
        var promotionMoney = this.getPromotionMoney(cartItems);
        return '名称：' + this.buildPromotionName(cartItems) + '，金额：' + promotionMoney.toFixed(2) + '元\n';
    };

    Promotion.prototype.buildPromotionName = function () {
        return this.name;
    };

    return Promotion;
})();

module.exports = Promotion;
