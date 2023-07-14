const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// 新增
router.get('/create', (req, res) => {
    return res.render('create')
})

router.post('/', (req, res) => {
    const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
    return Restaurant.find()
        .estimatedDocumentCount()
        .then(count => Restaurant.create({ id: count + 1, name, name_en, category, image, location, phone, google_map, rating, description }))
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

// 刪除
router.delete('/:id', (req, res) => {
    const { id } = req.params
    Restaurant.findOne({ id })
        .then(restaurant => restaurant.remove())
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

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