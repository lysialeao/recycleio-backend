const express = require('express')

const { companies, people, gather, sediment } = require('./controllers')

const path = require('path')
var methodOverride = require('method-override')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))


app.use('/companies', companies)
app.use('/people', people)
app.use('/gather', gather)
app.use('/sediment', sediment)

app.listen(80, () => {
    console.log("Listening on port 80")
});

