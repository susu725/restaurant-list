if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const db = require('../../config/mongoose')

const User = require('../user')
const Restaurant = require('../restaurant')

const bcrypt = require('bcryptjs')

const restaurants = require('../../restaurant.json').results
const users = [
    {
        name: 'user1',
        email: 'user1@example.com',
        password: '12345678',
        restaurants: [1, 2, 3]
    },
    {
        name: 'user2',
        email: 'user2@example.com',
        password: '12345678',
        restaurants: [4, 5, 6]
    }
]

db.once('open', () => {
    Promise.all(users.map((user, index) => {
        return User.create({
            ...user,
            password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        })
            .then(user => {
                const userId = user._id
                return Promise.all(
                    Array.from(
                        restaurants.slice(index * 3, (index + 1) * 3),
                        restaurants => Restaurant.create({ ...restaurants, userId }))
                )
            })
            .catch(err => console.log(err))
    }))
        .then(() => process.exit())
})