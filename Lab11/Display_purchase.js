function isNonNegInt(q, return_error = false) {
    let errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    else {
        if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
        if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer    
    } 
    return errors;
}

let params = (new URL(document.location)).searchParams;

if(params.has('quantity_textbox')){
    let qty = params.get('quantity_textbox'); 
    //validate the quantity
    if(isNonNegInt(qty).length == 0) {
        document.write(`Thank you for ordering ${qty} things!`); 
    } else {
        document.write('Invalid quantity. Press the back button and try again.'); 
    }
} else {
    document.write('Quantity not specified in query string'); 
}
