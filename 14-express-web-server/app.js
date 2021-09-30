const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.json({
    //     nama: 'Arrico',
    //     email: 'arricohandyanto@gmail.com',
    //     nohp: '085156637671'
    // })
    res.sendFile('./index.html', { root: __dirname });
})
app.get('/about', (req, res) => {
    // res.send('Ini adalah halaman about')
    res.sendFile('./about.html', { root: __dirname });
})
app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman contact')
    res.sendFile('./contact.html', { root: __dirname });
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

// const fs = require('fs');
// const http = require('http');

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error: file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
// }

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     })

//     const url = req.url;
//     switch (url) {
//         case '/about':
//             renderHTML('./about.html', res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html', res);
//             break;
//         default:
//             renderHTML('./index.html', res);
//             break;
//     }

//     // if (url === '/about') {
//     //     renderHTML('./about.html', res);
//     // } else if (url === '/contact') {
//     //     renderHTML('./contact.html', res);
//     // } else {
//     //     renderHTML('./index.html', res);
//     // }
// }).listen(3000, () => {
//     console.log('Server is listening on port 3000..')
// })