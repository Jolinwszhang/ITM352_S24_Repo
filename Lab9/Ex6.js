
let attributes = "jolin;20;20.5;-19.5";

let pieces = attributes.split(";");


function validateNonNegInt(input, returnErrors = false) {
    let errors = [];
  
    if (Number(input) != input) errors.push('Not a number!');
    if (input < 0) errors.push('Negative value!');
    if (parseInt(input) != input) errors.push('Not an integer!');
  
    return returnErrors ? errors : (errors.length === 0);
  }
  
  for (let i = 0; i < pieces.length; i++) {
    let validationResult = validateNonNegInt(pieces[i], true);
    console.log(`Validation result for element "${pieces[i]}": ${validationResult}`);
  }

  pieces.forEach((item, index) => {
    item = item.replace(/<|>/g, '');
    console.log(item);
    console.log(`part ${index} is ${(validateNonNegInt(item) ? 'a' : 'not a')} quantity`);
  });
