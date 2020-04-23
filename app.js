const express = require('express')
const path = require('path')
const homeRoutes = require('./routes/homeRoutes')

const app = express()

//create home route
app.get('/', (req, res)=>{
    res.render('index')
})

//set up view engine
app.set('view engine', 'ejs')

//set up static files
app.use(express.static(path.join(__dirname, '/public')))

//set up routes
app.use('/home', homeRoutes)

app.listen(3000, ()=>{
    console.log('app now listening for request on port 3000')
})