const express = require('express')
const app = express()
const Sale = require('../models/Sale')

const User = require('../models/User')
const Subject = require('../models/Subject')
/** Método para crear */
createSale = async (req,res) => {
   const arr = []
   if(!req.body)
      return res.status(400).send('Must provide a user')

   await User.findById(req.body.user,(err,user) => {
      if(err) {
         return res.status(400).json({
            sucess: false,
            message: err.message
         })
      }

      if(!user) {
         return res.status(400).json({
            sucess: false,
            message: 'user not found'
         })
      }

      console.log("user found")
      arr.push(user)
      return user
   })
   .then( async () => {
      const subject = await Subject.findById(req.body.subject,(err,subject) => {
         if(err) {
            return res.status(400).json({
               sucess: false,
               message: err.message
            })
         }

         if(!subject) {
            return res.status(400).json({
               sucess: false,
               message: 'subject not found :/'
            })
         }

         console.log("subject found")
         arr.push(subject)
         return subject
      })

      if(subject)
         return true
      else
         throw new Error('subject not found')
   })
   .then(async () => {
      const sale = new Sale(req.body)
      const subject = arr.pop()
      const user = arr.pop()
      subject.sales.push(sale.id)
      subject.students.push(user.id)
      user.orders.push(sale.id)
      await sale.save()
      await subject.save()
      await user.save()

      return true
   })
   .then( () => {
      return res.status(201).send('success insert')
   })
   .catch(e => {
      console.error(e.message)
   })

}

/** Método para obtener muchos documentos */
getSales = async(req,res) => {
   await Sale.find({}, (err,docs) => {
      if(err) {
         return res.status(400).json({
            error : err.message,
            sucess: false
         })
      }

      if(!docs.length) {
         return res.status(404).json({
            sucess: false,
            error : 'Not sales created'
         })
      }
return res.status(200).json({
         sucess: true,
         sales : docs
      })
   })
   .catch(e => {
      console.error(e.message)
   })
}

/** Método para obtener un solo documento */
getSale = async (req,res) => {
   await Sale.findById(req.params.id, (err,doc) => {
      if(err) {
         return res.status(400).json({
            error: err.message,
            sucess: false
         })
      }

      if(!doc) {
         return res.status(404).json({
            sucess: false,
            error : 'sale not found'
         })
      }

      return res.status(200).json({
         sucess: true,
         sale : doc
      })
   })
   .catch(e => {
      console.error(e.message)
   })
}

module.exports = {
   createSale,
   getSale,
   getSales,
}
