// mengambil argument dari command line
// console.log(process.argv[2]);
// if (command === 'add') {

// } else if (command === 'remove') {

// } else if (command === 'list') {

// }
const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        nohp: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.nohp);

        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     nohp: argv.nohp,
        // };
        // console.log(contact);
    },
});
yargs.parse();

// const contacts = require('./contacts');

// const main = async() => {
//     const nama = await contacts.tulisQuest('Masukkan nama anda : ');
//     const email = await contacts.tulisQuest('Masukkan email anda : ');
//     const nohp = await contacts.tulisQuest('Masukkan nomor hp anda : ');

//     contacts.simpanContact(nama, email, nohp);
// }

// main();