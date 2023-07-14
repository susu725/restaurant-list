const express = require('express')
const exphbs = require('express-handlebars')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

require('./config/mongoose')

const app = express()
const PORT = 2999

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.send(`HI`)
})

app.listen(PORT, () => {
    console.log('連線成功')
})