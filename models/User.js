const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

const userSchema = new Schema({
    googleId:String
});

mongoose.model('users',userSchema);
