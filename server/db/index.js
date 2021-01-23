const mongoose = require('mongoose');

mongoose
   .connect('mongodb://localhost:27017/fisidb',{
      useNewUrlParser: true,
      useUnifiedTopology : true,
      useFindAndModify : false
   })
   .catch( error => {
      console.error(error.message);
   })

module.exports = mongoose.connection
