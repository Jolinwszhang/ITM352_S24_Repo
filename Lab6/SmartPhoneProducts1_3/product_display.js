//order called sent to DOM
let monthInput=document.getElementById("monthInput");
let result=document.getElementById("result");

//Once button is selected with function
document.querySelector('button').addEventListener('click', function () {
    let month=monthInput.value.toLowerCase();

//value defaulted to error on output
    let num_days =-1;

    //switch is introduced to change output 
    switch(month) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            num_days=31;
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            num_days=30;
            break;
        case "february":
            num_days=28;
            break;
        default:
            num_days=-1;
            break;
    }
// days and months 
    if (num_days === -1){
        result.textContent ='Invalid Month. Please enter a valid month name';
    } else {
        result.textContent = `There are ${num_days} days in ${month}.`;
    }
    });
