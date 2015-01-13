var assert = require("assert");
var Item = require('../app/scripts/item');


describe('item', function () {
    it('getAllItems correct', function () {

    });
    describe('.getItemByBarcode()', function () {
        it('should return item correct', function () {
            var items = [
                new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),
                new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐'),
                new Item('ITEM000002', '雪碧', '瓶', 3.00, '')
            ];
            var item = Item.findItemByBarcode(items, 'ITEM000000');
            assert.equal(item.name, '可口可乐350ml');
            assert.equal(item.brand, '可口可乐');
        })
    })
});
