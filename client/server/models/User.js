const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
   username : {
      type : String,
      required: true,
      unique: true
   },
   password : {
      type : String,
      required: true
   },
   name : {
      type : String,
      required: true,
   },
   lastname : {
      type : String,
      required: true,
   },
   code : {
      type : String,
      required: true,
      unique: true
   },
   gender : String,
   ownerOf : [{
      type: Schema.Types.ObjectId,
      ref: 'subject'
   }],
   desireds : [{
      type: Schema.Types.ObjectId,
      ref: 'subject'
   }],
   orders : [{
      type: Schema.Types.ObjectId,
      ref: 'sale'
   }],
}, { versionKey : false })

const User = mongoose.model('user', userSchema);

module.exports = User
