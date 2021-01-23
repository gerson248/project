const mongoose = require('mongoose');
const Schema = mongoose.Schema

const profesorSchema = new Schema({
   name : {
      type : String,
      required: true,
   },
   lastname : {
      type : String,
      required: true,
   },
   gender : String,
   date : Date,
   subjects: [{
      type: Schema.Types.ObjectId,
      ref : 'subject'
   }]
},{ versionKey : false })

const Profesor = mongoose.model('profesor', profesorSchema);

module.exports = Profesor
