const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    level: Number
})

module.exports = mongoose.model("Character", characterSchema)