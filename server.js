const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/',(req,res,next) => res.sendFile(path.join(__dirname,'./public/index.html')))
app.use('/dist', express.static(path.join(__dirname, './dist')));
app.use('/assets',express.static(path.join(__dirname,'./src/assets')));

const BreweryDb = require('brewerydb-node');
require("dotenv").config()
const brewdb = new BreweryDb(process.env.BREWERY_KEY);


app.get('/api/breweries',async(req,res,next)=>{
    try{
        const breweries = (await axios.get(`https://sandbox-api.brewerydb.com/v2/breweries/?key=${process.env.BREWERY_KEY}`)).data
        res.status(201).send(breweries);
    }catch(ex){
        console.log(ex);
    }
})

app.get('/api/beer/random',async(req,res,next)=>{
    try{
        const beer = (await axios.get(`https://sandbox-api.brewerydb.com/v2/beer/random/?key=${process.env.BREWERY_KEY}`)).data
        res.status(201).send(beer);
    }catch(ex){
        console.log(ex);
    }
})

const init = () => {    
    const port = process.env.PORT || 8080;
    app.listen(port,()=>console.log(`listening on port: ${port}`))
}
init();