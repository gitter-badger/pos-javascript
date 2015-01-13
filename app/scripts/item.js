'use strict';

var _ = require('lodash');

var Item = (function () {
    function Item (barcode, name, util, price, brand) {
        this.barcode = barcode;
        this.name = name;
        this.util = util;
        this.price = price || 0.00;
        this.brand = brand || '';
    }

    Item.findItemByBarcode = function (items, barcode) {
        return _.find(items, {'barcode': barcode});
    };

    Item.prototype.getName = function () {
      return this.name;
    };

    Item.prototype.getUtil = function () {
      return this.util;
    };

    Item.prototype.getPrice = function () {
      return this.price;
    };

    Item.prototype.getBrand = function () {
      return this.brand;
    };

    return Item;
})();

module.exports = Item;
