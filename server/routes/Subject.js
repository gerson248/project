const express = require('express')
const app = express()
const Subject = require('../models/Subject')

/** Método para obtener muchos documentos */
app.get('/subjects', async(req,res) => {
   const subjects = await Subject.find({})
   try {
      console.log(subjects);
      res.send(subjects);
   } catch(e) {
      res.send(e.message)
      console.error(e.message)
   }
})

/** Método para obtener un solo documento */
app.get('/subject/:id', async (req,res) => {
   try {
      const id = req.params.id
      const subject = await Subject.findById(id);
      if(!subject) {
         res.status(404).send('This subject does not exist!!');
         console.log('Please, introduce a valid id!!')
      }
      else {
         res.send(subject)
         console.log(subject)
      }
   } catch(e) {
      res.status(500).send(e.message)
      console.error(e.message)
   }
})

/** Método para crear */
app.post('/subject', async (req,res) => {
   const subject = new Subject(req.body);
   try {
      await subject.save();
      console.log(`${subject.name} inserted success!!`);
      res.send(`${subject.name} inserted success!!`);
   } catch(e) {
      res.send(e.message)
      console.error(e.message)
   }
})

/** Método para eliminar */
app.delete('/subject/:id', async (req,res) => {
   try {
      const subject = await Subject.findByIdAndDelete(req.params.id)
      if(!subject) {
         res.status(404).send('This subject does not exist!!!!');
         console.log('Please, introduce a valid id!!')
      }
      else {
         res.send('Success delete!!!')
         console.log('Success delete!!!')
      }
      
   } catch (e) {
      res.status(500).send(e.message)
      console.error(e.message)
   }
})

/** Método para sustituir */
app.put('/subject/:id', async (req,res) => {
   try {
      const id = req.params.id
      const subject = await Subject.findByIdAndUpdate(id, req.body);
      if(!subject) {
         res.status(404).send('This subject does not exist!!!!');
         console.log('Please, introduce a valid id!!')
      }
      else {
         subject.save()
         res.send('Success update!!!!!!')
         console.log('Success update!!!!!!')
      }
   } catch(e) {
      res.status(500).send(e.message)
      console.error(e.message)
   }
})

module.exports = app
