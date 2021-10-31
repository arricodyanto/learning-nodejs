const { MongoClient } = require('mongodb')
const ObjectID = require('mongodb').ObjectID

const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'testconn'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi gagal!')
    }
    // console.log('Koneksi berhasil!')

    // Pilih database
    const db = client.db(dbName)

    // Add 1  data ke collection users
    // db.collection('test').insertOne({
    //         nama: 'Aksal Syah',
    //         email: 'aksalsyah@gmail.com'
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('gagal menambahkan data!')
    //         }
    //         console.log(result)
    //     }
    // )

    // Menambahkan lebih dari 1 data
    // db.collection('test').insertMany(
    //     [{
    //             nama: 'Arrico',
    //             email: 'arricohandyanto@gmail.com'
    //         },
    //         {
    //             nama: 'Aksal Syah',
    //             email: 'aksalsyah@gmail.com'
    //         }
    //     ],

    //     (error, result) => {
    //         if (error) {
    //             return console.log('data gagal ditambahkan!')
    //         }
    //         console.log(result);
    //     }
    // )

    // Menampilkan semua data yang ada di collection 'test'
    // console.log(
    //     db
    //     .collection('test')
    //     .find()
    //     .toArray((error, result) => {
    //         console.log(result)
    //     })
    // )

    // Menampilkan data berdasarkan kriteria
    // console.log(
    //     db
    //     .collection('test')
    //     .find({ nama: 'Arrico' })
    //     .toArray((error, result) => {
    //         console.log(result)
    //     })
    // )

    // Mengubah data berdasarkan id
    // const updatePromise = db.collection('test').updateOne({
    //     _id: ObjectID("617ed4f4256c6c0530c05c08")
    // }, {
    //     $set: {
    //         email: 'arricohandyanto@gmail.com'
    //     },
    // })

    // updatePromise.then((result) => {
    //         console.log(result)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    // Mengubah data lebih dati 1 berdasarkan kriteria
    // db.collection('test').updateMany({
    //     nama: 'Arrico'
    // }, {
    //     $set: {
    //         nama: 'Arrico Tok'
    //     }
    // })

    // Menghapus 1 data
    db.collection('test').deleteOne({
        _id: ObjectID('617ed7bfd10dded9900870d5')
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})