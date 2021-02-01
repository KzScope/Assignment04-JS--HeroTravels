const firstClassTicket = 150;
const economyClassTicket = 100;
const vatRate = 0.1;

// event handlers
// firstClass tickets
document.getElementById('f-plusBtn').addEventListener('click', function () {
    fClassTotalQty(true);
    Billing();
});

document.getElementById('f-minusBtn').addEventListener('click', function () {
    fClassTotalQty(false);
    Billing();
});
    function fClassTotalQty(isIncrease) {
        const ticketInput = document.getElementById('f-ticket-input');
        const ticketQuantity = parseInt(ticketInput.value);
        let ticketNewQuantity =ticketQuantity;
        if (isIncrease == true) {
            ticketNewQuantity = ticketQuantity + 1;
        } if(isIncrease == false && ticketQuantity > 0) {
            ticketNewQuantity = ticketQuantity - 1;
        }
        ticketInput.value = ticketNewQuantity;
        const fClassQty = ticketNewQuantity;
        return fClassQty
    };

// EconomyClass tickets
document.getElementById('e-plusBtn').addEventListener('click', function () {
    eClassTotalQty(true);
    Billing();
});

document.getElementById('e-minusBtn').addEventListener('click', function () {
    eClassTotalQty(false);
    Billing();
});
function eClassTotalQty(isIncrease) {
    const ticketInput = document.getElementById('e-ticket-input');
    const ticketQuantity = parseInt(ticketInput.value);
    let ticketNewQuantity =ticketQuantity;
    if (isIncrease == true) {
        ticketNewQuantity = ticketQuantity + 1;
    } if(isIncrease == false && ticketQuantity > 0) {
        ticketNewQuantity = ticketQuantity - 1;
    }
    ticketInput.value = ticketNewQuantity;
    const eClassQty = ticketNewQuantity;
    return eClassQty; 
};

function Billing() {
// fClass ticket total 
    const getInputFclass = document.getElementById('f-ticket-input');
    const totalFclass = parseInt(getInputFclass.value);
    const firstClassSales = totalFclass;
    const fClassBill = firstClassSales * firstClassTicket;
// econ class total
    const getInputEclass = document.getElementById('e-ticket-input');
    const totalEclass = parseInt(getInputEclass.value);
    const econClassSales = totalEclass;
    const eClassBill = econClassSales * economyClassTicket;
// Grand total 
    let subTotal = fClassBill + eClassBill;
    document.getElementById('sub-amount').innerHTML='$'+ subTotal;

    const vatTotal = subTotal * vatRate;
    document.getElementById('vat-amount').innerText = '$' + vatTotal;

    const grandTotal = subTotal + vatTotal;
    document.getElementById('total-amount').innerText = '$' + grandTotal;
}



// Bonus effect

const checkout = document.getElementById("confirmation");
checkout.addEventListener('click', function () {
    const bookingArea = document.getElementById("Booking");
    bookingArea.style.display = "None";
    const confirmArea = document.getElementById("confirmation-page");
    confirmArea.style.display = "Block";
})
