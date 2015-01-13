var assert = require("assert");
var Item = require('../app/scripts/item');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        })
    })
});

describe('item', function () {
    it('.getAllItems', function () {

    });
    describe('.getItemByBarcode()', function () {
        it('should return item correct', function () {
            var items = [
                new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),
                new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'),
                new Item('ITEM000001', '雪碧', '瓶', 3.00, '')
            ];
            var item = Item.findItemByBarcode(items, 'ITEM000000');
            assert.equal(item.name, '可口可乐350ml');
            assert.equal(item.brand, '可口可乐');
        })
    })
});
