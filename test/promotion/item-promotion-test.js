'use strict';

var assert = require('assert');
var Item = require('../../app/scripts/item');
var CartItem = require('../../app/scripts/cart-item');
var ItemPromotion = require('../../app/scripts/promotion/item-promotion');

describe('item promotion test', function () {

    describe('#getPromotionString()', function () {
        it('get barcode promotion string', function () {
            var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var promotion = new ItemPromotion('ITEM000000', 0.95);
            var str = promotion.getPromotionString(new CartItem(item1, 20));
            var expectString = '名称：可口可乐350ml单品打折，金额：3.00元\n';
            assert.equal(str, expectString);
        });
    });

    describe('#getPromotionMoney', function () {
        it('get promotion money count', function () {
            var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var promotion = new ItemPromotion('ITEM000000', 0.95);
            assert.equal(3, promotion.getPromotionMoney(new CartItem(item1, 20)));
        });
    });
});
