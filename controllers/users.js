const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

router.post('/login', (req, res) => {
    res.send('hit login post route')
})

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body, 10)
    .then(hash => ({
        email: req.body.email,
        password: hash,
        motto: req.body.motto
    }))
    User.create(req.body)
    .then((createdUser) => res.json(createdUser))
    .catch(err=>{
      console.log('Oops, there was an error creating the user!')
    })
})

module.exports = router