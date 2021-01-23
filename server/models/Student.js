const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
   subject_id : {
      type: Schema.Types.ObjectId,
      ref : 'subject',
      required : true
   },
   price : {
      type : Number,
      required : true
   },
   date : {
      type : Date,
      required : true,
      default : Date.now
   }
}, { versionKey : false})

const desiredSchema = new Schema({
   subject_id : {
      type: Schema.Types.ObjectId,
      ref : 'subject',
      required : true
   }
}, { versionKey : false })

const studentSchema = new Schema({
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
   },
   gender : String,
   date : Date,
   orders : [orderSchema],
   desireds : [desiredSchema]
}, { versionKey : false })

const Student = mongoose.model('student', studentSchema)

module.exports = Student
