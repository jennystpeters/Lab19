var shoppingList = document.getElementById("shoppingList");
var textArea = document.getElementById("textArea");
var receipt = document.getElementById("receipt");

var items = [];
var prices = [];
var total = 0.0;

function addItem(item, price) {
  items.push(item);
  prices.push(price);
  textArea.innerHTML = textArea.innerHTML + item + " $" + price + "&#10";
}

function sumTotal() {
  for (var i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  total *= 1.06;
  receipt.innerHTML = textArea.innerHTML;
  textArea.innerHTML = "";
  shoppingList.innerHTML = "";
  shoppingList.innerHTML =
    shoppingList.innerHTML + "$" + total.toFixed(2);
  items = [];
  prices = [];
  total = 0;
}