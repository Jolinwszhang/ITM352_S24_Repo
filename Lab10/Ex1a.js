let month = 11; // born november 
let day = 29;
let year = 2003;
let step1 = 3;
let step2 = parseInt(step1/4);
let step3 = step1 + step2; 
let step4 = 5; // Not Jan, so look at month before on table
let step6 = step4 + step3; 
let step7 = step6 + day; 
let step8 = step7 - 1; 
let step9 = step8%7; 
console.log(step9);
$