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
}).demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no hp contact',
    handler() {
        contacts.listContact();
    },
});

// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

//menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
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