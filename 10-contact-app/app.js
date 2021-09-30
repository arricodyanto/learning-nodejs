const contacts = require('./contacts');

const main = async() => {
    const nama = await contacts.tulisQuest('Masukkan nama anda : ');
    const email = await contacts.tulisQuest('Masukkan email anda : ');
    const nohp = await contacts.tulisQuest('Masukkan nomor hp anda : ');

    contacts.simpanContact(nama, email, nohp);
}

main();