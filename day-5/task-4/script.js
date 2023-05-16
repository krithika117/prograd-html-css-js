// A new shopping mall has been opened in the city. To attract people and to bring in crowd, the mall has announced some schemes. 
// If a person is visiting a shop atleast once, they will be given a welcome gift of 100GV.
// If the cost of any purchased items value is more than 1000, a 500 GV will be given.
// If the cost of any purchased items value is more than 3000, a 1500 GV will be given.
// If the cost of any purchased items value is more than 5000, a 3000 GV will be given.

// Based on the user visits and purchase, give the gifts to the people.

var visitedShop = false;
var purchaseAmount = 0;

function calculateGift() {
  visitedShop = document.getElementById("shop-visited").checked;
  purchaseAmount = Number(document.getElementById("purchase-amount").value);

  var giftAmount = 0;

  if (visitedShop) {
    giftAmount += 100;
  }

  if (purchaseAmount >= 1000) {
    giftAmount += 500;
  }

  if (purchaseAmount >= 3000) {
    giftAmount += 1500;
  }

  if (purchaseAmount >= 5000) {
    giftAmount += 3000;
  }

  document.getElementById("gift-result").innerHTML = `You have received a gift of ${giftAmount}GV! Thank you for shopping with us.`;
}
