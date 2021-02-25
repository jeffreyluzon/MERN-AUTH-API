const User = require('../models/User')

User.create({
    email: 'test@test.com',
    password: 'testpassword',
    motto: 'test'
}, (err, createdUser) => {
    if (err) console.log('Error added test user', err)
    else console.log('success!', createdUser)
})