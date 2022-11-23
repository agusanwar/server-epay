// (1) import package mongoose
const mongoose = require('mongoose');

// (2) kita import konfigurasi terkait MongoDB dari app/config.js
const { urlDb } = require('../config/index');

// (3) connect ke MongoDB menggunakan konfigurasi yang telah kita import
mongoose
  .connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// (4) simpan koneksi dalam constant db
const db = mongoose.connection;

// (5) export db supaya bisa digunakan oleh file lain yang membutuhkan
module.exports = db;
