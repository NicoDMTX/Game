const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    life: Number,
    force: Number,
    magie: Number,
    dexterite: Number,
    level: Number,
    creationDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Character", characterSchema)