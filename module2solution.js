(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;
    buy.items = ShoppingListCheckOffService.getItems();

    buy.bought = function (index) {
      ShoppingListCheckOffService.removeItem(index);
    }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var already = this;
  already.bought = ShoppingListCheckOffService.getBought();

}

  function ShoppingListCheckOffService() {

    var items = [{ name: "cookies", quantity: 10 },
    { name: "sugary drink", quantity: 10 },
    { name: "chips", quantity: 10 },
    { name: "book", quantity: 10 },
    { name: "cookies", quantity: 10 },
    { name: "choclates", quantity: 50},
    ];

    var bought = [];

    var service = this;

    service.getItems = function () {
      return items;

    };




    service.removeItem = function (index) {

      var item = {
        name: items[index].name,
        quantity: items[index].quantity
      };

      console.log(item);

     items.splice(index,1);

     bought.push(item);
      };

      service.getBought = function () {
        return bought;
      };



 }

})();