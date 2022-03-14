const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')


const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(3000, () => console.log('Listening to server on port 3000'))