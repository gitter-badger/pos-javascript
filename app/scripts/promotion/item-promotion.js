'use strict';

var _ = require('lodash');
var Item = require('./../item');
var SimpleDiscount = require('./simple-discount');

var ItemPromotion = (function () {
    function ItemPromotion(barcode, discount) {
        SimpleDiscount.call(this, '', discount);
        this.barcode = barcode;
    }

    ItemPromotion.prototype = Object.create(SimpleDiscount.prototype);
    ItemPromotion.prototype.constructor = ItemPromotion;

    ItemPromotion.prototype.buildPromotionName = function (cartItem) {
        var itemName = Item.findItemByBarcode(cartItem.item.getBarcode()).getName();
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
