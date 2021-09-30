// const nama = 'Arrico Handyanto';
// const cetakNama = (nama) => {
//     return `Hi, nama saya ${nama}`;
// }
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(`Arrico`));

// const fs = require('fs'); // import core module
// const cetakNama = require('./coba'); // import local module
// const moment = require('moment'); // third party module / npm module / node_modules

// require('./coba');
const coba = require('./coba');

// console.log('Hello, Arrico!');
console.log(coba.cetakNama('Arrico'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());