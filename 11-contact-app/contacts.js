const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
// const { resolve } = require('path/posix');

// membuat folder data jika beulm ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// rl.question('Masukkan nama anda : ', (nama) => {
//     rl.question('Masukkan nomor hp anda : ', (nohp) => {
//         const contact = { nama, nohp };
//         const file = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(file);

//         contacts.push(contact);
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         console.log('Data sudah ditulis, terimakasih');
//         rl.close();
//     });
// });

const simpanContact = (nama, email, nohp) => {
    const contact = { nama, email, nohp };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
        return false;
    }

    // cek email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.yellow.inverse.bold('Email tidak valid!'));
            return false;
        }
    }

    // cek no hp
    if (!validator.isMobilePhone(nohp, 'id-ID')) {
        console.log(chalk.yellow.inverse.bold('Nomor HP tidak valid!'));
        return false;
    }

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold('Data sudah ditulis, terimakasih'));
}

module.exports = { simpanContact }