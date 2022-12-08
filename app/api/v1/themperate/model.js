const mongoose = require('mongoose');

let themperateSchema = mongoose.Schema(
    {
        themperature: {
            type: String,
        },
        pressure: {
            type: String,
        },
        altitude: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Themperate', themperateSchema);