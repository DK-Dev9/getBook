import axios from 'axios'

import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('view cache', false);
// app.engine('ejs', require('ejs').__express);
// app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>res.render('index.ejs', {data:""}))

let search = "react"

app.get('/search', (req, res)=>{

    
    search = req.query.search
    let book; 

    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBx3BdS0XeBuS7IJx3E4ofJYwLSPVDN92g&maxResults=40')
    .then((result)=>{

            book = result.data.items;

            res.render('index', {data:book})
     
    })

})

app.listen(3000, ()=>{
    console.log("listening")
})

























