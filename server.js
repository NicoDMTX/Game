const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser')
const Character = require('./character');
const fs = require('fs');
const character = require('./character');

const app = express();
const PORT = 3000;

// Configuration of db
mongoose.connect('mongodb://localhost/game', () => {
    console.log('connected');
})

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/js/main.js')
})

app.post('/character', async (req,res) => {
    const newCharacter = new Character({
        name: 'windmark',
        life: 50,
        force: 0,
        magie: 0,
        dexterite: 0,
        level : 1
    });
    await newCharacter.save();
    res.json(newCharacter);
    return
})

app.delete('/character/(:id)', async (req,res) => {
    try{
        const id = req.params.id
        const character = await Character.deleteOne({ _id : id})
        res.json(character)
    } catch (e) {
        print(e);
    }

app.get('/character/(:id)', async (req,res) => {
    try {
        const id = req.params.id
        const character = await Character.findOne({ _id: id})
        res.json(character)
    } catch (e) {
        print(e)
    }
})
   


})

app.listen(PORT, console.log(`Le port écoute au numéro ${PORT}`));