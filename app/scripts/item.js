'use strict';

var _ = require('lodash');

var Item = (function () {
    function Item(barcode, name, util, price, brand) {
        this.barcode = barcode;
        this.name = name;
        this.util = util;
        this.price = price || 0.00;
        this.brand = brand || '';
    }

    Item.findAllItems = function () {
        return [
            new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),
            new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐'),
            new Item('ITEM000002', '雪碧', '瓶', 3.00, '')
        ];
    };

    Item.findItemByBarcode = function (barcode) {
        var items = Item.findAllItems();
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

    Item.prototype.getBarcode = function () {
        return this.barcode;
    };

    return Item;
})();

module.exports = Item;
