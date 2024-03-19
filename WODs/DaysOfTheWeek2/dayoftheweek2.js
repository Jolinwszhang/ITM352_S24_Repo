/*days*/
const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

/*months*/
const months ={
    "January": 0,
    "Feburary": 3,
    "March": 2,
    "April": 5,
    "May": 0,
    "June": 3,
    "July": 5,
    "August": 1,
    "September": 4,
    "October": 6,
    "November": 2,
    "December": 4,
}

/*algorithem*/
let month = 11;
let day =29;
let year =2003;

//Step 1: is the year jan or feb
if(month === 1 || month === 2){
    year --;
}

// Step 2: dive step 1 by 4 
let step1 = Math.floor(year/4);

//Step 3: addding step 1 remainder
let step2 = year+ step1;

//step 4:dividng step 1 by 100 
let step3 = Math.floor(year/100);
let step4 = step2-step3;

//step 5: divide by 100, adding our step 4 and 5 tg
let step5 = Math.floor(year/400);
let step6 = step5 +step4;

//step 6: add the days 
let step7 = step6 + day;

// step 7 : add th total 
let monthIndex = months[Object.keys(months)[month]];
let step8 = (step7 +monthIndex) % 7;

// print out 
console.log (month,day,year, days[step8]);


