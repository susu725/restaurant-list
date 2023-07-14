const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

require('./config/mongoose')

const PORT = 2999

app.get('/', (req, res) => {
    res.send(`HI`)
})

app.listen(PORT, () => {
    console.log('連線成功')
})