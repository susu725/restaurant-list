const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/:id', (req, res) => {
    const { id } = req.params
    return Restaurant.findOne({ id })
        .lean()
        .then(restaurant => res.render('detail', { restaurant }))
        .catch(err => console.log(err))
})

module.exports = router