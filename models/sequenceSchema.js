const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
    seq: {
        type: String
    },
    id: {
        type: Number
    }
})

module.exports = mongoose.model('autoId', sequenceSchema);