const mongoose = require('mongoose');

mongoose
   .connect('mongodb+srv://<username>:<password>@cluster0.ysmyx.mongodb.net/sales?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology : true,
      useFindAndModify : false,
      useCreateIndex : true
   })
   .catch( error => {
      console.error(error.message);
   })

module.exports = mongoose.connection
