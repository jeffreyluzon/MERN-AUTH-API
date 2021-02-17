const mongoose = require('mongoose');
const DB_CONNECTION_STRING = `mongodb+srv://sei:<password>@cluster0.mf0oy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(DB_CONNECTION_STRING)
.then((instance)=> {
    console.log(`connected to db: ${instance.connections[0].name}`)
})
.catch(err=>console.log('connection failed!', err))

module.exports = mongoose