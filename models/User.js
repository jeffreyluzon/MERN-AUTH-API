const mongoose = require('../db/connection');
const options = {
  timestamps: true,
  tojson: {
    virtual: true, 
    tranform: (_doc, userDocToReturn) => {
        delete userDocToReturn.password
        return userDocToReturn
    }
  }
}
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    motto: String
}, options)

module.exports = mongoose.model('User', userSchema);