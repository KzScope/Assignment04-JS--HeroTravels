// "f-ticket-input"
// "f-plusBtn"
// "f-minusBtn"

// "e-ticket-input"
// "e-plusBtn"
// "e-minusBtn"

// "sub-amount"
// "vat-amount"
// "total-amount"

// "booking"
// "booking-content"
// "confirmation-page"


// ticket unit price 
const firstClassTicket = 150;
const economyClassTicket = 100;
const vatRate = 0.1;

// const fClassTotalBill = fClassTicketPriceTotal;
// const eClassTotalBill = eClassTicketPriceTotal;

// const subTotal = fClassTotalBill+eClassTotalBill;
// const vatTotal = subTotal*vatRate;
// const grandTotal = subTotal + vatTotal;
// document.getElementById('sub-amount').innerText = '$' + subTotal;
// document.getElementById('vat-amount').innerText = '$' + vatTotal;
// document.getElementById('total-amount').innerText = '$' + grandTotal;


// event handlers
// firstClass tickets
document.getElementById('f-plusBtn').addEventListener('click', function () {
    quantityChange(true);
});

document.getElementById('f-minusBtn').addEventListener('click', function () {
    quantityChange(false);
});
function quantityChange(isIncrease) {
    const ticketInput = document.getElementById('f-ticket-input');
    const ticketQuantity = parseInt(ticketInput.value);
    let ticketNewQuantity =ticketQuantity;
    if (isIncrease == true) {
        ticketNewQuantity = ticketQuantity + 1;
    } if(isIncrease == false && ticketQuantity > 0) {
        ticketNewQuantity = ticketQuantity - 1;
    }
    ticketInput.value = ticketNewQuantity;
    const fClassTicketPriceTotal = ticketNewQuantity * firstClassTicket;
    return fClassTicketPriceTotal;
    totalBill();

};

// event handlers
// EconomyClass tickets

document.getElementById('e-plusBtn').addEventListener('click', function () {
    quantityChange2(true);
})

document.getElementById('e-minusBtn').addEventListener('click', function () {
    quantityChange2(false);
})
function quantityChange2(isIncrease) {
    const ticketInput = document.getElementById('e-ticket-input');
    const ticketQuantity = parseInt(ticketInput.value);
    let ticketNewQuantity =ticketQuantity;
    if (isIncrease == true) {
        ticketNewQuantity = ticketQuantity + 1;
    } if(isIncrease == false && ticketQuantity > 0) {
        ticketNewQuantity = ticketQuantity - 1;
    }
    ticketInput.value = ticketNewQuantity;
    const eClassTicketPriceTotal = ticketNewQuantity * economyClassTicket;
    return eClassTicketPriceTotal;
    totalBill()
};

// total Bill
function totalBill() {
    const fClassTotalBill = fClassTicketPriceTotal;
    const eClassTotalBill = eClassTicketPriceTotal;

    const subTotal = fClassTotalBill + eClassTotalBill;
    document.getElementById('sub-amount').innerText = '$' + subTotal;

    const vatTotal = subTotal*vatRate;
    document.getElementById('vat-amount').innerText = '$' + vatTotal;

    const grandTotal = subTotal + vatTotal;
    document.getElementById('total-amount').innerText = '$' + grandTotal;

};



// for bonus
const bookingBtn = document.getElementById("confirmation");
bookingBtn.addEventListener("click", function () {
    const bookingArea = document.getElementById('booking');
    bookingArea.style.display = "none";
    const greeting = document.getElementById('confirmation-page');
    greeting.style.display = "block";
});