var assert = require('assert');
var CartItem = require('../app/scripts/cart-item');
var Item = require('../app/scripts/item');

describe('cart-item', function () {
    describe('.toCartItem', function () {
        var tips = [
            {'ITEM000000': 2},
            {'ITEM000001': 2},
            {'ITEM000002': 3}
        ];

        it('should to cartItem correct', function () {
            var sinon = require('sinon');

            var findItem = sinon.stub(Item, 'findItemByBarcode');
            var item1 = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '33');
            findItem.withArgs('ITEM000000').returns(item1);
            findItem.withArgs('ITEM000001').returns(item2);
            findItem.withArgs('ITEM000002').returns(item3);

            cartItems = CartItem.toCartItems(tips);
            assert.equal(cartItems[0].item.name, '可口可乐350ml');
            assert.equal(cartItems[0].count, 2);

            assert.equal(cartItems[2].item.name, '雪碧');
            assert.equal(cartItems[2].count, 3);

            Item.findItemByBarcode.restore();
        });

    });
});
