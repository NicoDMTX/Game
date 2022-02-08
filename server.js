var express = require('express');
const mongoose = require('mongoose');
const Character = require('./character')

mongoose.connect('mongodb://localhost/game', () => {
    console.log('connected');
})


async function createCharacter() {
    try {
        const character = new Character({ name : "Mage", level: 1 })
        await character.save().then(() => console.log("Character saved"));
        console.log(character);  
    } catch (err) {
        console.log(err);
    }
      
}

async function findCharacter() {
    const character = await Character.findOne({})
    console.log(character);
}

createCharacter()

var app = express();

app.get('/', (req,res) => {
    res.send('test')
})

app.listen(27017);