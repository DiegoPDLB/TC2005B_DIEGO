const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const csrfProtection = csrf();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: false
}));

app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const authRoutes = require('./routes/auth');
app.use(authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
