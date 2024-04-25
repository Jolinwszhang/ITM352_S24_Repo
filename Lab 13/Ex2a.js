const fs = require('fs');
const user_data_file = __dirname + '/user_data.json';

if (fs.existsSync(user_data_file)) {
    // Read user data
    const data = fs.readFileSync(user_data_file, 'utf-8');
    // Convert data JSON to Object
    const users_reg_data = JSON.parse(data);
    // Log user_reg_data info 
    let username = "kazman";
    // Path to json object
    console.log(users_reg_data[username].password);
} else {
    console.log(`${user_data_file} does not exist.`);
}
