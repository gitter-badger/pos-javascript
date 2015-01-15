'use strict';

var assert = require('assert');
var BrandMeetReduce = require('../app/scripts/brand-meet-reduce');
var Item = require('../app/scripts/item');
var CartItem = require('../app/scripts/cart-item');

describe('brand-meet-reduce test', function () {
  describe('#getPromotionMoney', function () {
    it('item total less than meet should return 0', function () {
        var brandMeetReduce = new BrandMeetReduce('可口可乐满100减5', 100, 5, '可口可乐');

        var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
        var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
        var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '33');

        var cartItems = [
        new CartItem(item1, 2),
        new CartItem(item2, 2),
        new CartItem(item3, 30)
        ];

        assert.equal(0, brandMeetReduce.getPromotionMoney(cartItems));
      });

      it('item total more than meet should return reduce', function () {
        var brandMeetReduce = new BrandMeetReduce('可口可乐满100减5', 100, 5, '可口可乐');

        var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
        var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
        var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '33');

        var cartItems = [
        new CartItem(item1, 20),
        new CartItem(item2, 20),
        new CartItem(item3, 30)
        ];

        assert.equal(5, brandMeetReduce.getPromotionMoney(cartItems));
      });

      it('item total equal than meet should return reduce', function () {
        var brandMeetReduce = new BrandMeetReduce('可口可乐满100减5', 100, 5, '可口可乐');

        var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
        var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
        var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '33');

        var cartItems = [
        new CartItem(item1, 20),
        new CartItem(item2, 10),
        new CartItem(item3, 30)
        ];

        assert.equal(5, brandMeetReduce.getPromotionMoney(cartItems));
      });
  });
});
