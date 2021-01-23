const express = require('express')
const app = express()
const Profesor = require('../models/Profesor')

/** Método para obtener muchos documentos */
app.get('/profesors', async(req,res) => {
   const profesors = await Profesor.find({})
   try {
      console.log(profesors);
      res.send(profesors);
   } catch(e) {
      res.send(e.message)
      console.error(e.message)
   }
})

/** Método para obtener un solo documento */
app.get('/profesor/:id', async (req,res) => {
   try {
      const id = req.params.id
      const profesor = await Profesor.findById(id);
      if(!profesor) {
         res.status(404).send('This profesor does not exist!!');
         console.log('Please, introduce a valid id!!')
      }
      else {
         res.send(profesor)
         console.log(profesor)
      }
   } catch(e) {
      res.status(500).send(e.message)
      console.error(e.message)
   }
})

/** Método para crear */
app.post('/profesor', async (req,res) => {
   const profesor = new Profesor(req.body);
   try {
      await profesor.save();
      console.log(`${profesor.name} inserted success!!`);
      res.send(`${profesor.name} inserted success!!`);
   } catch(e) {
      res.send(e.message)
      console.error(e.message)
   }
})

/** Método para eliminar */
app.delete('/profesor/:id', async (req,res) => {
   try {
      const profesor = await Profesor.findByIdAndDelete(req.params.id)
      if(!profesor) {
         res.status(404).send('This profesor does not exist!!!!');
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
app.put('/profesor/:id', async (req,res) => {
   try {
      const id = req.params.id
      const profesor = await Profesor.findByIdAndUpdate(id, req.body);
      if(!profesor) {
         res.status(404).send('This profesor does not exist!!!!');
         console.log('Please, introduce a valid id!!')
      }
      else {
         profesor.save()
         res.send('Success update!!!!!!')
         console.log('Success update!!!!!!')
      }
   } catch(e) {
      res.status(500).send(e.message)
      console.error(e.message)
   }
})

module.exports = app
