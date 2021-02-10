const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 12

/** Método para crear: Se usa para registrar usuarios */
createUser = async (req,res) => {
   if(!req.body)
      return res.status(400).send('Must provide a user')

   const user = new User(req.body)

   if(!user)
      return res.status(400).send('user not created')

   const hashing = await new Promise((resolve,reject) => {
      bcrypt.hash(req.body.password,saltRounds,(err,hash) => {
         if(err)
            reject(err)
         user.password = hash
         resolve(true) })
   })

   if(hashing) {
      user.save()
         .then(() => {
            return res.status(201).send('success insert')
         })
         .catch(err => {
            return res.status(400).json({
               error : err.message,
               message: 'user not created'
            })
         })
   } else
      return res.send('password not hashed, not secure process')
}

/** Método para obtener muchos documentos */
getUsers = async(req,res) => {
   await User.find({}, (err,docs) => {
      if(err) {
         return res.status(400).json({
            error : err.message,
            sucess: false
         })
      }

      if(!docs.length) {
         return res.status(404).json({
            sucess: false,
            error : 'Not users created'
         })
      }

      return res.status(200).json({
         sucess: true,
         users : docs
      })
   })
   .catch(err => {
      console.error(err.message)
   })
}

/** Método para obtener un solo documento */
getUser = async (req,res) => {
   await User.findById(req.params.id, (err,doc) => {
      if(err) {
         return res.status(400).json({
            error: err.message,
            sucess: false
         })
      }

      if(!doc) {
         return res.status(404).json({
            sucess: false,
            error : 'user not found'
         })
      }

      return res.status(200).json({
         sucess: true,
         user : doc
      })
   })
   .catch(e => {
      console.error(e.message)
   })
}


/** Método para eliminar */
deleteUser = async (req,res) => {
   await User.findByIdAndDelete(req.params.id, (err,user) => {
      if(err) {
         return res.status(400).json({
            error: err.message,
            sucess: false
         })
      }

      if(!user) {
         return res.status(404).json({
            sucess: false,
            error : 'user not found'
         })
      }

      return res.status(200).json({
         sucess: true,
         message: 'user deleted'
      })
   })
}

/** Método para sustituir */
updateUser = (req,res) => {
   if(!req.body)
      return res.status(400).send('Must provide a user')

   User.findById(req.params.id, async (err,user) => {
      if(err) {
         return res.status(400).json({
            error: err.message,
            sucess: false
         })
      }

      if(!user) {
         return res.status(404).json({
            sucess: false,
            error : 'user not found'
         })
      }

      user.username = req.body.username
      user.name = req.body.name
      user.lastname = req.body.lastname
      user.code = req.body.code
      user.gender = req.body.gender
      user.ownerOf = req.body.ownerOf
      user.desireds = req.body.desireds
      user.orders = req.body.orders
      user.password = await new Promise((resolve,reject) => {
         bcrypt.hash(req.body.password,saltRounds,(err,hash) => {
            if(err)
               reject(false)
            resolve(hash)
         })
      })
      
      user.save()
         .then(() => {
            return res.status(201).json({
               sucess: true,
               message: 'user updated!'
            })
         })
         .catch( e => {
            return res.status(400).json({
               sucess : false,
               error: e.message
            })
         })
   })
}

/** Logeo **/
findUserByUsername = async (req,res) => {
   if(!req.body)
      return res.status(400).send('Must provide a user')

   User.findOne({ username : req.body.username}, async (err,user) => {
      if(err) {
         return res.status(400).json({
            error : err.message,
            sucess: false
         })
      }
      
      if(!user) {
         return res.status(404).json({
            sucess: false,
            error : 'username not found'
         })
      }

      if(!bcrypt.compareSync(req.body.password, user.password)) {
         return res.status(404).json({
            sucess: false,
            error : 'passowrd invalid'
         })
      }

      return res.status(201).json({
         sucess: true,
         message: "The username and password combination is correct!"
      });

   })
}

module.exports = {
   createUser,
   findUserByUsername,
   getUser,
   getUsers,
   updateUser,
   deleteUser
}
