'use strict';

var SimpleMeetReduce = require('./simple-meet-reduce');

var ItemMeetReduce = (function () {

    function ItemMeetReduce(name, meet, reduce, barcode) {
        SimpleMeetReduce.call(this, name, meet, reduce);
        this.barcode = barcode;
    }

    ItemMeetReduce.prototype = Object.create(SimpleMeetReduce.prototype);
    ItemMeetReduce.prototype.constructor = ItemMeetReduce;

    ItemMeetReduce.prototype.getPromotionMoney = function (cartItem) {
        return cartItem.calculateTotal() >= this.meet ? this.reduce : 0;
    };

    return ItemMeetReduce;
})();

module.exports = ItemMeetReduce;
