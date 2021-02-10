const mongoose = require('mongoose');
const Schema = mongoose.Schema

const saleSchema = new Schema({
   number : {
      type : String,
      required: true,
      unique : true
   },
   user : {
      type: Schema.Types.ObjectId,
      ref : 'user',
      required: true
   },
   subject : {
      type: Schema.Types.ObjectId,
      ref : 'subject',
      required: true
   },
   price : {
      type: Number,
      required: true
   },
   date : {
      type : Date,
      required: true
   }
})

const Sale = mongoose.model('sale', saleSchema)

module.exports = Sale
