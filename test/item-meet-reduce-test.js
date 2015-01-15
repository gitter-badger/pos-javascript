'use strict';

var assert = require('assert');
var Item = require('../app/scripts/item');
var CartItem = require('../app/scripts/cart-item');
var ItemMeetReduce = require('../app/scripts/item-meet-reduce');

describe('item-meet-reduce', function () {
  describe('#getPromotionMoney', function () {
    it('item total less than meet should return 0', function () {
      var sinon = require('sinon');
      var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var cartItem = new CartItem(item, 40);
      var calculateTotal = sinon.stub(cartItem, 'calculateTotal');
      calculateTotal.returns(10);

      var itemMeetReduce = new ItemMeetReduce('可口可乐350Ml满100减5', 100, 5, 'ITEM000002');
      assert.equal(0, itemMeetReduce.getPromotionMoney(cartItem));
      cartItem.calculateTotal.restore();
    });

    it('item total more than meet should return reduce', function () {
      var sinon = require('sinon');
      var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var cartItem = new CartItem(item, 40);
      var calculateTotal = sinon.stub(cartItem, 'calculateTotal');
      calculateTotal.returns(103);

      var itemMeetReduce = new ItemMeetReduce('可口可乐350Ml满100减5', 100, 5, 'ITEM000002');
      assert.equal(5, itemMeetReduce.getPromotionMoney(cartItem));
      cartItem.calculateTotal.restore();
    });

    it('item total equal than meet should return reduce', function () {
      var sinon = require('sinon');
      var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var cartItem = new CartItem(item, 40);
      var calculateTotal = sinon.stub(cartItem, 'calculateTotal');
      calculateTotal.returns(100);

      var itemMeetReduce = new ItemMeetReduce('可口可乐350Ml满100减5', 100, 5, 'ITEM000002');
      assert.equal(5, itemMeetReduce.getPromotionMoney(cartItem));
      cartItem.calculateTotal.restore();
    });
  });

  describe('#getPromotionString', function () {
    it('get promotion correct', function () {
      var sinon = require('sinon');
      var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var cartItem = new CartItem(item, 40);
      var calculateTotal = sinon.stub(cartItem, 'calculateTotal');
      calculateTotal.returns(100);

      var itemMeetReduce = new ItemMeetReduce('可口可乐350ML满100减5', 100, 5, 'ITEM000002');
      assert.equal('名称：可口可乐350ML满100减5，金额：5.00元\n', itemMeetReduce.getPromotionString(cartItem));
      cartItem.calculateTotal.restore();
    })
  });
});
