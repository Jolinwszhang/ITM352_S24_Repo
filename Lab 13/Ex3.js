// Import required modules
const express = require('express');
const fs = require('fs');

// Create an Express application
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Define GET route for login page
app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
    <body>
    <form action="/login" method="POST">
    <input type="text" name="username" size="40" placeholder="enter username" ><br />
    <input type="password" name="password" size="40" placeholder="enter password"><br />
    <input type="submit" value="Submit" id="submit">
    </form>
    </body>
    `;
    response.send(str);
});

// Define POST route to process login form submission
app.post("/login", function (request, response) {
    // Retrieve username and password from form data
    const username = request.body.username;
    const password = request.body.password;

    // Check if username exists in user data
    if (users_reg_data.hasOwnProperty(username)) {
        // Check if password matches stored password
        if (users_reg_data[username].password === password) {
            // Redirect to logged in page
            response.redirect(`/${username}`);
            return;
        }
    }

    // Redirect back to login page if username or password is incorrect
    response.redirect("/login");
});

// Define route for logged in user page
app.get("/:username", function (request, response) {
    const username = request.params.username;
    response.send(`<h1>${username} logged in.</h1>`);
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
