// POST route to process login form submission
app.post("/login", function (request, response) {
    // Retrieve username and password from form data
    const username = request.body.username;
    const password = request.body.password;

    // Check if username exists in user data and password is correct
    if (users_reg_data.hasOwnProperty(username) && users_reg_data[username].password === password) {
        // Redirect to logged in page if login successful
        response.redirect(`/${username}`);
    } else {
        // Render login page with error message
        response.render('login', { username: username, error: 'Invalid username or password' });
    }
});

// GET route for login page
app.get("/login", function (request, response) {
    // Render login form
    response.render('login', { username: '', error: '' });
});
