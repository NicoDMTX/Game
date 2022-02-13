async function createCharacter() {
    try {
        
        

        const character = new Character({name: name, level: level})
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