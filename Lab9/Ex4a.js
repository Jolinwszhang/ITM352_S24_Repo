
console.log(isNonNegInt("1.23"));
console.log(isNonNegInt("123"));
console.log(isNonNegInt("-123"));

function ReturnStringNonNegInt(q){
    errors = []; // assume no errors at first 
    if(Number(q) !=q) errors.push('Not a number!');// chceck if string is a number value 
    if(q<0) errors.push('Negative value!');// Check if it is non-negative 
    if(parseInt(q) !=q) errors.push('Not an Integer!');// check that is is an integer
    return(errors.length == 0);
}   

