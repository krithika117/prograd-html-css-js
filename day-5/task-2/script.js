const discounts = {
    monday: 0.15,
    tuesday: 0.1,
    wednesday: 0.12,
    thursday: 0.11,
    friday: 0.13,
    saturday: 0.14,
    sunday: 0.15
};

var customerBills = {};

function calculateDiscount() {
    const billAmount = parseInt(document.getElementById("billAmount").value);
    const customerName = document.getElementById("customerName").value;
    const dayOfWeek = document.getElementById("dayOfWeek").value;
    const result = document.getElementById("result");
    const discount = calculateDiscountHelper(dayOfWeek, billAmount, customerName);
    result.innerHTML = (`Discount for ${customerName}'s bill on ${dayOfWeek}: ${discount}`);
}

function calculateDiscountHelper(dayOfWeek, billAmount, customerName) {
    document.getElementById("result").value = "";
    if (!customerBills[dayOfWeek]) {
        customerBills[dayOfWeek] = {
            [customerName]: billAmount
        };
        return billAmount * discounts[dayOfWeek];
    } else if (!customerBills[dayOfWeek][customerName]) {
        customerBills[dayOfWeek][customerName] = billAmount;
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