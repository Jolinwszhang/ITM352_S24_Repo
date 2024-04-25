const express = require('express');
const fs = require('fs');

const app = express();

// Define initial user data
let users_reg_data = {
    "dport": {"name": "Dan Port", "password": "portspassword", "email": "dport@hawaii.edu"},
    "kazman": {"name": "Rick Kazman", "password": "kazmanpassword", "email": "kazman@hawaii.edu"},
    "itm352": {"name": "ITM 352", "password": "grader", "email": "itm352@hawaii.edu"}
};

// Add new user information
const new_username = 'newuser';
users_reg_data[new_username] = {};
users_reg_data[new_username].password = 'newpass';
users_reg_data[new_username].email = 'newuser@user.com';

// Write updated user data to user_data.json
fs.writeFileSync(__dirname + '/user_data.json', JSON.stringify(users_reg_data));

// Define route for registration form
app.get("/register", function (request, response) {
    // Give a simple register form
    const str = `
    <body>
    <form action="/register" method="POST">
    <input type="text" name="username" size="40" placeholder="enter username" ><br />
    <input type="password" name="password" size="40" placeholder="enter password"><br />
    <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
    <input type="email" name="email" size="40" placeholder="enter email"><br />
    <input type="submit" value="Submit" id="submit">
    </form>
    </body>
    `;
    response.send(str);
 });

// Define route to process registration form submission
app.post("/register", function (request, response) {
    // Retrieve form data
    const username = request.body.username;
    const password = request.body.password;
    const repeat_password = request.body.repeat_password;
    const email = request.body.email;

    // Check if username already exists
    if (users_reg_data.hasOwnProperty(username)) {
        response.redirect("/register");
        return;
    }

    // Check if password and repeat_password match
    if (password !== repeat_password) {
        response.redirect("/register");
        return;
    }

    // Save new user info
    users_reg_data[username] = {password: password, email: email};

    // Write updated user data to user_data.json
    fs.writeFileSync(__dirname + '/user_data.json', JSON.stringify(users_reg_data));

    // Redirect to the login page
    response.redirect("/login");
 });

// Start the server
app.listen(8080, () => console.log(`listening on port 8080`));