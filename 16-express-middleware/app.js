const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Builtin Middleware
app.use(express.static('public'));

// Application middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})
app.use((req, res, next) => {
    console.log('Ini middleware ke 2');
    next();
})

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname });
    const mahasiswa = [{
            nama: 'Arrico Handyanto',
            email: 'arricohandyanto@gmail.com',
        },
        {
            nama: 'Aksal Syah Falah',
            email: 'aksalsyah@gmail.com',
        },
        {
            nama: 'Adhani Rahma Putri',
            email: 'adhaniput@gmail.com',
        },
    ];
    res.render('index', {
        layout: 'layouts/main-layout',
        nama: 'Arrico Handyanto',
        title: 'Halaman Home',
        mahasiswa,
    });
})
app.get('/about', (req, res) => {
    // res.send('Ini adalah halaman about')
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About',
    });
})
app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman contact')
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
    });
})
app.get('/product/:id', (req, res) => {
    // app.get('/product/:id/category/:idCat', (req, res) => {
    // res.send(`Produk ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
    res.send(`Produk ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
})
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</404>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})