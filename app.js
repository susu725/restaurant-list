const express = require('express')
const app = express()

const PORT = 2999

app.get('/', (req, res) => {
    res.send(`HI`)
})

app.listen(PORT, () => {
    console.log('連線成功')
})