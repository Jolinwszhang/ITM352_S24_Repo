//const users_reg_data = require(__dirname + '/user_data.json');
const fs = require('fs');
const user_data_file = __dirname + '/user_data.json';
// read user data
const data = fs.readFileSync(user_data_file, 'utf-8');
//conver data JSON to Object
const users_reg_data = JSON.parse(data);
// log user_reg_data info 
let username = "kazman";
// path to json object
console.log(users_reg_data[username].password);