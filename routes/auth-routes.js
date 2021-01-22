const passport = require("passport")
const db = require("../models")

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

module.exports = (app) => {
    app.get('/login', (req, res) => {
        res.render('login', )
    })
    app.post('/login', passport.authenticate("local"), async (req, res) => {
        let user = await db.User.findOne({
            where: {
                email: req.body.userEmail
            }
        })
        res.render("members", {
            userName: user.name
        })
    })
    app.get('/register', (req, res) => {
        res.render('register', )
    })

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    app.post('/register', checkNotAuthenticated, async (req, res) => {
        console.log(req.body);
        try {
            console.log("inside of try");
            db.User.create({
                name: req.body.userName,
                email: req.body.userEmail,
                password: req.body.userPassword
            }).then(function () {
                res.redirect('/login')
            }).catch(function (e) {
                console.log("inside of catch", e);
                res.redirect('/register')
            })
        } catch (err) {
            console.log(err)
        }
    })
}