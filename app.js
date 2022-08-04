const express = require('express')
const app = express()
const PORT = 5000
// we use bodyParser which is a node package so we can parse the information in the body through json. We can pass json through the post method using this
const bodyParser = require('body-Parser')
// tell the app to use bodyParser with the type of data to parse
app.use(bodyParser.json())

//routes 
// used for creating the hierachy of the web page
app.get('/', (req, res) => {
    res.send('hello! express now wtf!')
})
// app.get('/movies', (req,res)=>{
//     res.send('routes')
// })

//route parameters are represented by a : colon
// used to capture different URLS and dynamically input

//movies/action/year/2019

app.get('/movies/:genre/:year',(req,res)=>{
    //to collect which param is being passed dynamically

console.log(req.params.genre)
console.log(req.params.year)

    res.send('it worked')
})


//querystring parameter. querystring begin after the ? and contact a key and value seperated with an = (like an object key and value) passing multiple use the & (ex. https://movies.com/movies?sort=asc&page=16)
// more commonly used for searching for something or sorting and filtering operations when needing to pass in the arguments in URL. Can extract and do a different action based on whats being passed. 

app.get('/movie', (req,res) =>{

    
    console.log(req.query.sort)
    console.log(req.query.page)
    res.send('[movie]')
    
})

app.get('/movies', (req,res) =>{

    
    let movies = [
        {
            title:"spiderman", year: 2014
        },
        {
            title:"ironman", year: 2019
        },
        {
            title:"batman", year: 2000
        },
        {
            title:"ghostman", year: 2021
        },
    ]

    res.json(movies)
})

// HTTP POST method. a post request allows the client to submit data to the server which is known as the body. The server can use  the data to create a new content or record. A user would post data to s the server which will take that data and do someting with it. the values consist of the body. JSON

//{title: "lord of the rings", year: 2013}

// using postman to define the headers as content-type json and the raw data we can pass an object in

app.post('/movies', (req,res) =>{
    
    let title = req.body.title;
    let year = req.body.year;
    let revenue = req.body.revenue
    console.log(title);
    console.log(year);
    console.log(revenue)

    res.send('ok')
})




app.listen(PORT,() => {
    console.log(`App is running on server ${PORT}`)
})
