'use strict';

var assert = require('assert');
var Item = require('../app/scripts/item');
var CartItem = require('../app/scripts/cart-item');
var WholeDiscount = require('../app/scripts/whole-promotion');


describe('whole promotion test', function () {
    describe('#getPromotionString()', function () {
        it('get barcode promotion string', function () {
            var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '33');

            var cartItems = [
                new CartItem(item1, 20),
                new CartItem(item2, 20),
                new CartItem(item3, 30)
            ];
            var barcodes = ['ITEM000001'];

            var promotion = new WholeDiscount('九折', 0.9, barcodes);
            var str = promotion.getPromotionString(cartItems);
            var expectString = '名称：九折，金额：15.00元\n';
            assert.equal(str, expectString);
        });
    });

    describe('#getPromotionMoney', function () {
        it('get promotion money count', function () {
            var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '33');

            var cartItems = [
                new CartItem(item1, 20),
                new CartItem(item2, 20),
                new CartItem(item3, 30)
            ];
            var barcodes = ['ITEM000001'];

            var promotion = new WholeDiscount('九折', 0.9, barcodes);
            assert.equal(15, promotion.getPromotionMoney(cartItems));
        });
    });
});
