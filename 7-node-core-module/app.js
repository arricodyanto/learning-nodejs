// Core Module
// File System

const fs = require('fs');

// menuliskan string ke file (synchronous)
// fs.writeFileSync('test.txt', 'Hello World secara synchronous!');

// menampung error yang terjadi
// try {
//     fs.writeFileSync('data/text.txt', 'Hello World synchronous di folder baru!');
// } catch (err) {
//     console.log(err);
// }

// menuliskan string secara Asynchronous
// fs.writeFile('data/text.txt', 'Hello World secara Asynchronous!', (err) => {
//     console.log(err);
// })

// membaca file secara synchronous
// const data = fs.readFileSync('data/text.txt');
// const data = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(data.toString());

// // membaca file secara Asynchronous
// fs.readFile('data/text.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan nomor hp anda : ', (nohp) => {
        const contact = { nama, nohp };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Data sudah ditulis, terimakasih');
        rl.close();
    });
});