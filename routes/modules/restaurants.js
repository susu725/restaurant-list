const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// 瀏覽
router.get('/:id', (req, res) => {
    const { id } = req.params
    return Restaurant.findOne({ id })
        .lean()
        .then(restaurant => res.render('detail', { restaurant }))
        .catch(err => console.log(err))
})

// 編輯
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    return Restaurant.findOne({ id })
        .lean()
        .then(restaurant => res.render('edit', { restaurant }))
        .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const info = req.body
    return Restaurant.updateOne({ id: id }, info)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router