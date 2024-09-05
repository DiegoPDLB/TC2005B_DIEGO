const bcrypt = require('bcryptjs');

const users = []; // Esto es un arreglo en memoria para almacenar usuarios. En producción usarías una base de datos.

exports.getSignup = (req, res, next) => {
    res.render('signup', { csrfToken: req.csrfToken() });
};

exports.postSignup = (req, res, next) => {
    const { email, password } = req.body;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.redirect('/signup');
    }

    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            users.push({ email, password: hashedPassword });
            res.redirect('/login');
        })
        .catch(err => {
            console.error(err);
            res.redirect('/signup');
        });
};

exports.getLogin = (req, res, next) => {
    res.render('login', { csrfToken: req.csrfToken() });
};

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.redirect('/login');
    }

    bcrypt.compare(password, user.password)
        .then(doMatch => {
            if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    res.redirect('/');
                });
            }
            res.redirect('/login');
        })
        .catch(err => {
            console.error(err);
            res.redirect('/login');
        });
};

exports.getProtectedRoute = (req, res, next) => {
    res.send('Esta es una ruta protegida');
};
