var visitedShop = false;
var purchaseAmount = 0;

function calculateGift() {
  visitedShop = document.getElementById("shop-visited").checked;
  purchaseAmount = Number(document.getElementById("purchase-amount").value);

  var giftAmount = 0;

  if (visitedShop) {
    giftAmount += 100;
  }

  if (purchaseAmount > 1000) {
    giftAmount += 500;
  }

  if (purchaseAmount > 3000) {
    giftAmount += 1500;
  }

  if (purchaseAmount > 5000) {
    giftAmount += 3000;
  }

  document.getElementById("gift-result").innerHTML = `You have received a gift of ${giftAmount}GV! Thank you for shopping with us.`;
}
