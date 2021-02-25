const passport = require('passport')
const Strategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('passport-jwt')

const options = {
    secretOrKey: 'some sting value only your app knows',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const findUser = (jwt_payload, done) => {
    User.findById(jwt_payload.id)
    .then(foundUser => done(null, foundUser))
}

const strategy = new Strategy(option, findUser)



passport.use(strategy)


passport.initialize()

const createUserToken = (req, user) => {
    const validPassword = req.body.password ? 
        bcrypt.compareSync(req.body.password, user.password) : false
}