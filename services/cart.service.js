(function() {
  angular
    .module('teaTime')
    .factory('Shop', Shop)

    function Shop()  {

      var items, cart, qty;

      items = {};
      cart = {};

      items.add = function(tea, val) {
        if (!cart[tea._id]) {
          cart[tea._id] = tea;
          cart[tea._id].qty = parseInt(val);
          return;
        }
        cart[tea._id].qty += parseInt(val);
      }

      items.edit = function(tea, val) {
        cart[tea._id].qty = parseInt(val);
        console.log(cart[tea._id].qty)
      }

      items.remove = function(tea) {
        delete cart[tea._id];
      }

      items.cart = function() {
        return cart;
      }

      items.total = function () {
        var orderTotal = 0;
        for (item in cart) {
          orderTotal += cart[item].qty * cart[item].price;
        }
        return orderTotal;

      }

      return items;
    }

})();
