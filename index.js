const express = require('express');
const app = express();
const axios = require('axios');

const baseURL = "https://pokeapi.co/api/v2/pokemon/1"

app.get('/', function (req,res) {
    res.send("Ola mundo");
})


app.get('/pokemon/:id', async (req,res) => {
    try{
        axios.get(baseURL)
            .then(resp => {
               res.json(resp.data.sprites.other['official-artwork'].front_default);
        })
    }
    catch (err){
        console.log(err)
    }
    
})


 app.listen(8000, function(){
 });