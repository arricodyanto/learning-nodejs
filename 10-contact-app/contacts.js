const fs = require('fs');
// const { resolve } = require('path/posix');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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

const tulisQuest = (quest) => {
    return new Promise((resolve, reject) => {
        rl.question(quest, (nama) => {
            resolve(nama);
        })
    })
}

const simpanContact = (nama, email, nohp) => {
    const contact = { nama, email, nohp };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Data sudah ditulis, terimakasih');
    rl.close();
}

module.exports = { tulisQuest, simpanContact }