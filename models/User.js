const mongoose = require('mongoose')

//facilite la lecture d'erreur de la part de mongoDB pour la validation unique d'adress mail
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: { type : String, require: true}
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('user', userSchema)