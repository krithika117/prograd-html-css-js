// Platina Bakery is celebrating the platinum year since its founding and as an offer to its customers it has announced a week offer for its customers who are buying any items irrespective of the price:

// For the next week starting from tomorrow there is a discount for everyday:

// MONDAY    - 15%
// TUESDAY   - 10%
// WEDNESDAY - 12%
// THURSDAY  - 11%
// FRIDAY    - 13%
// SATURDAY  - 14%
// SUNDAY    - 15%

// One customer can submit only one bill and if customer submits many bills, only first bill of the day will be taken into account.

const discounts = {
    monday: 0.15,
    tuesday: 0.1,
    wednesday: 0.12,
    thursday: 0.11,
    friday: 0.13,
    saturday: 0.14,
    sunday: 0.15
};

var allBills = {};

function calculateDiscount() {
    const billAmount = parseInt(document.getElementById("billAmount").value);
    const customerName = document.getElementById("customerName").value;
    const dayOfWeek = document.getElementById("dayOfWeek").value;
    const result = document.getElementById("result");
    const discount = calculateDiscountHelper(dayOfWeek, billAmount, customerName);
    result.innerHTML = (`Discount for ${customerName}'s bill on ${dayOfWeek} is Rs.${discount} and Amount Payable is Rs.${billAmount - discount}`);
}

function calculateDiscountHelper(dayOfWeek, billAmount, customerName) {
    console.log(allBills);
    document.getElementById("result").value = "";
    if (!allBills[dayOfWeek]) {
        allBills[dayOfWeek] = {
            [customerName]: billAmount
        };
        return billAmount * discounts[dayOfWeek];
    } else if (!allBills[dayOfWeek][customerName]) {
        allBills[dayOfWeek][customerName] = billAmount;
        return billAmount * discounts[dayOfWeek];
    } else {
        return `Sorry ${customerName}, you have already submitted a bill today.`;
    }
}

function inputClear() {
    document.getElementById("billAmount").value = "";
    document.getElementById("customerName").value = "";
    document.getElementById("dayOfWeek").value = "";
    document.getElementById("result").value = "";
}