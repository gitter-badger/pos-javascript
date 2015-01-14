'use strict';

var _ = require('lodash');
var Item = require('./item');

var ItemPromotion = (function () {
    function ItemPromotion(barcode, discount) {
        this.barcode = barcode;
        this.discount = discount;
    }

    ItemPromotion.prototype.getPromotionString = function (cartItem) {
        var promotionMoney = this.getPromotionMoney(cartItem);
        return '名称：' + this.buildPromotionName(cartItem.item.getBarcode()) + '，金额：' + promotionMoney.toFixed(2) + '元\n';
    };

    ItemPromotion.prototype.buildPromotionName = function (barcode) {
        var itemName = Item.findItemByBarcode(barcode).getName();
        return itemName + '单品打折';
    };

    ItemPromotion.prototype.getPromotionMoney = function (cartItem) {
        var promotionMoney = 0.00;
        if (cartItem.item.getBarcode() === this.barcode) {
            promotionMoney += cartItem.calculateTotal();
        }
        return promotionMoney - (promotionMoney * this.discount);

    };

    return ItemPromotion;
})();

module.exports = ItemPromotion;
