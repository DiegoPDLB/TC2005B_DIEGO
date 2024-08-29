const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

// Rutas
app.get('/', (req, res) => {
  res.render('index', { message: req.flash('info') });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'usuario' && password === 'contraseña') {
    req.session.user = username;
    res.cookie('user', username, { httpOnly: true });
    req.flash('info', 'Inicio de sesión exitoso!');
    res.redirect('/');
  } else {
    req.flash('info', 'Credenciales incorrectas.');
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user');
    res.redirect('/');
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
