
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const db = require('../../config/mongoose')

const Restaurant = require('../restaurant')

const restaurants = require('../../restaurant.json')

db.once('open', () => {
    restaurants.results.map(restaurant => {
        Restaurant.create({ ...restaurant })
    })
})
