// import mongoose
const mongoose = require('mongoose');

// import konfigurasi MongoDB
const { urlDb } = require('../config/index');

// connect to MongoDB 
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

// connection  onstant db
const db = mongoose.connection;

module.exports = db;

