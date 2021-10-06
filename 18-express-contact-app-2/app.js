const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact, cekDuplikat } = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);

// Builtin Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());

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
    const contacts = loadContact();

    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts, // contacts: contacts,
        msg: req.flash('msg'),
    });
})

// Halaman form tambah kontak
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Kontak',
        layout: 'layouts/main-layout',
    })
})

// Proses Data Contact
app.post('/contact', [
    body('nama').custom((value) => {
        const duplikat = cekDuplikat(value);
        if (duplikat) {
            throw new Error('Nama kontak sudah digunakan!');
        }
        return true;
    }),
    check('email', 'Email tidak valid!').isEmail(),
    check('nohp', 'Nomor handphone tidak valid!').isMobilePhone('id-ID'),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array() });
        res.render('add-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array(),
        })
    } else {
        addContact(req.body);

        // tambahkan flash message
        req.flash('msg', 'Data contact berhasil ditambahkan!');
        res.redirect('/contact');
    }


})

// Halaman detail kontak
app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);

    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Contact',
        contact,
    });
})
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</404>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})