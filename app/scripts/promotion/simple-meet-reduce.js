'use strict';

var SimpleMeetReduce = (function () {

    function SimpleMeetReduce(name, meet, reduce) {
        this.name = name;
        this.meet = meet;
        this.reduce = reduce;
    }

    SimpleMeetReduce.prototype.getPromotionString = function (cartItem) {
        var promotionMoney = this.getPromotionMoney(cartItem);
        var result = '名称：' + this.name + '，金额：' + promotionMoney.toFixed(2) + '元\n';
        return promotionMoney > 0 ? result : '';
    };

    return SimpleMeetReduce;
})();

module.exports = SimpleMeetReduce;
