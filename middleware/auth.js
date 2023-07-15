module.exports = {
    authenticator: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/users/login')
        console.log('請先登入才能使用！')
    }
}