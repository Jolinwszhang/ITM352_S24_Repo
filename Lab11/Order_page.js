// Function to check if a value is a non-negative integer
function isNonNegInt(q, return_error = false) {
    let errors = [];
    if (Number(q) != q) errors.push('Not a number!');
    else {
        if (q < 0) errors.push('Negative value!');
        if (parseInt(q) != q) errors.push('Not an integer!');
    }
    return (return_error) ? errors : (errors.length === 0);
}

// Function to display the purchase message
function displayPurchase() {
    let quantity_textbox1 = document.getElementById("quantity_textbox1");
    if (isNonNegInt(quantity_textbox1.value)) {
        document.body.innerHTML = `Thank you for ordering ${quantity_textbox1.value} things!`;
    }
}

// Check and display quantity message when typing in the textbox
function checkQuantityTextbox(the_textbox) {
    document.getElementById(the_textbox.id + '_message').innerHTML = isNonNegInt(the_textbox.value).join(',');
}

// Check if query parameter exists for quantity_textbox1 and display purchase accordingly
const params = (new URL(document.location)).searchParams;
if (params.has('quantity_textbox1')) {
    let qty = params.get('quantity_textbox1');
    if (isNonNegInt(qty)) {
        document.body.innerHTML = `Thank you for ordering ${qty} items`;
    } else {
        window.location.href = "order_page_ex3.html" + document.location.search;
    }
}

// Populate quantity_textbox1 if query parameter exists
if (params.has('quantity_textbox1')) {
    document.getElementById("quantity_textbox1").value = params.get('quantity_textbox1');
    checkQuantityTextbox(document.getElementById("quantity_textbox1"));
}
