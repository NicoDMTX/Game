const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser')
const Character = require('./character')

const app = express();
const PORT = 3000;

// Configuration of db
mongoose.connect('mongodb://localhost/game', () => {
    console.log('connected');
})

express.static(path.join(__dirname, '/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/character', async (req,res) => {
    const name = req.body.name;
    const level = 1;

    if(!name || !level) {
        res.send('il manque un argument');
        return;
    }

    const newCharacter =new Character({
        name: name,
        level : level
    })
    await newCharacter.save();
    res.json(newCharacter);
    return
})

app.listen(PORT, console.log(`Le port écoute au numéro ${PORT}`));