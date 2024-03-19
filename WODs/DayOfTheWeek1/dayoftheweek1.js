/*days*/
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/*months*/
const months = {
    "January": 0,
    "February": 3,
    "March": 3,
    "April": 6,
    "May": 1,
    "June": 4,
    "July": 6,
    "August": 2,
    "September": 5,
    "October": 0,
    "November": 3,
    "December": 5
}

/*algorithm*/
let month = 11;
let day = 29;
let year = 2003;

// step 1
if (month === 1 || month === 2) {
    year--;
}
// step 2
let step1 = Math.floor(year / 4);

// step 3
let step2 = year + step1;

// step 4 
let step3 = Math.floor(year / 100);
let step4 = step2 - step3;

// step 5 
let step5 = Math.floor(year / 400);
let step6 = step5 + step4;

// step 6 
let step7 = step6 + day;

// step 7 
let monthIndex = months[Object.keys(months)[month]];
let step8 = (step7 + monthIndex) % 7;

// print the date or have output 
console.log(month, day, year, days[step8]);
