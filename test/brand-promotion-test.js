'use strict';

var assert = require('assert');
var Item = require('../app/scripts/item');
var CartItem = require('../app/scripts/cart-item');
var BrandPromotion = require('../app/scripts/brand-promotion');

describe('promotion', function () {
  describe('#getPromotionString()', function () {
    it('get barcode promotion string', function () {
      var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
      var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '33');

      var cartItems = [
        new CartItem(item1, 20),
        new CartItem(item2, 20),
        new CartItem(item3, 3)
      ];

      var promotion = new BrandPromotion('可口可乐品牌打折', 0.90, '可口可乐');
      var str = promotion.getPromotionString(cartItems);
      var expectString = '名称：可口可乐品牌打折，金额：14.00元\n';
      assert.equal(str, expectString);
    });
  });

  describe('#getPromotionMoney', function () {
    it('get promotion money count', function () {
      var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
      var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '');

      var cartItems = [
      new CartItem(item1, 20),
      new CartItem(item2, 20),
      new CartItem(item3, 3)
      ];

      var promotion = new BrandPromotion('可口可乐品牌打折', 0.90, '可口可乐');
      assert.equal(14, promotion.getPromotionMoney(cartItems));
    });
  });
});
