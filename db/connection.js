require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((instance)=> {
    console.log(`connected to db: ${instance.connections[0].name}`)
})
.catch(err=>console.log('connection failed!', err))

module.exports = mongoose