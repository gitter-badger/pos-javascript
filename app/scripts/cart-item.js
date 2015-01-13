'use strict';
var _ = require('lodash');
var Item = require('./item')

var CartItem = (function () {
  function CartItem (item, count) {
    this.item = item;
    this.count = count;
  }

  CartItem.toCartItems = function (tips) {
    var cartItems = [];
    _.forEach(tips, function(tip) {
      cartItems.push(CartItem.toCartItem(tip));
    });
    return cartItems;
  };

  CartItem.toCartItem = function (tip) {
    var cartItem;
    for(var i in tip) {
      var item = Item.findItemByBarcode(i);
      cartItem = new CartItem(item, tip[i]);
    }

    return cartItem;
  };

  CartItem.prototype.calculateTotal = function () {
      return this.item.getPrice() * this.count;
  };

  CartItem.prototype.toString = function () {
    var item = this.item;
    return '名称：' + item.getName() + '，数量：' + this.count
      + item.getUtil() + '，单价：' + item.getPrice().toFixed(2) + '(元)，小计：'
      + this.calculateTotal().toFixed(2) + '(元)\n';
  };

  return CartItem;
})();
module.exports = CartItem;
