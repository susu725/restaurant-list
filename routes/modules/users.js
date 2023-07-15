const express = require('express')
const router = express.Router()

const User = require('../../models/user')

router.get('/login', (req, res) => {
    return res.render('login')
})

router.get('/register', (req, res) => {
    return res.render('register')
})

router.post('/register', (req, res) => {
    const { name, email, password, confirmpassword } = req.body
    User.findOne({ email }).then(user => {
        if (user) {
            console.log('此信箱已被註冊！')
            res.render('register', { name, email, password, confirmpassword })
        } else {
            User.create({ name, email, password })
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
        }
    })
        .catch(err => console.log(err))
})

module.exports = router