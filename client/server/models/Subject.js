const mongoose = require('mongoose')
const Schema = mongoose.Schema

const offerSchema = new Schema({
   code : {
      type : String,
      required: true,
      unique: true,
      sparse: true
   }, newPrice : {
      type : Number,
      required : true
   },
   start : {
      type : Date,
      required : true
   },
   end : {
      type : Date,
      required : true
   },
}, { versionKey : false })

const subjectSchema = new Schema({
   name : {
      type : String,
      required: true,
   },
   code : {
      type: String,
      required: true, unique : true
   },
   students : [{
      type : Schema.Types.ObjectId,
      ref: 'user',
   }],
   profesors : [{
      type : Schema.Types.ObjectId,
      ref: 'user',
   }],
   price : {
      type : Number,
      required: true
   },
   sales : [{
      type : Schema.Types.ObjectId,
      ref: 'sale',
   }],
   offers : [offerSchema]
}, { versionKey : false})

const Subject = mongoose.model('subject', subjectSchema)

module.exports = Subject
