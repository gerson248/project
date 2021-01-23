const mongoose = require('mongoose')
const Schema = mongoose.Schema

const offerSchema = new Schema({
   quantity : {
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
   students : [{
      type : Schema.Types.ObjectId,
      ref: 'student',
   }],
   profesors : [{
      type : Schema.Types.ObjectId,
      ref: 'profesor',
   }],
   offers : [offerSchema],
   price : {
      type : Number,
      required: true
   }
}, { versionKey : false})

const Subject = mongoose.model('subject', subjectSchema)

module.exports = Subject
