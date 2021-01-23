const express = require('express')
const app = express()
const Student = require('../models/Student')

/** Método para obtener muchos documentos */
app.get('/students', async(req,res) => {
   const students = await Student.find({})
   try {
      console.log(students);
      res.send(students);
   } catch(e) {
      res.send(e.message)
      console.error(e.message)
   }
})

/** Método para obtener un solo documento */
app.get('/student/:id', async (req,res) => {
   try {
      const id = req.params.id
      const student = await Student.findById(id);
      if(!student) {
         res.status(404).send('This student does not exist!!');
         console.log('Please, introduce a valid id!!')
      }
      else {
         res.send(student)
         console.log(student)
      }
   } catch(e) {
      res.status(500).send(e.message)
      console.error(e.message)
   }
})

/** Método para crear */
app.post('/student', async (req,res) => {
   const student = new Student(req.body);
   try {
      await student.save();
      console.log(`${student.name} inserted success!!`);
      res.send(`${student.name} inserted success!!`);
   } catch(e) {
      res.send(e.message)
      console.error(e.message)
   }
})

/** Método para eliminar */
app.delete('/student/:id', async (req,res) => {
   try {
      const student = await Student.findByIdAndDelete(req.params.id)
      if(!student) {
         res.status(404).send('This student does not exist!!!!');
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
app.put('/student/:id', async (req,res) => {
   try {
      const id = req.params.id
      const student = await Student.findByIdAndUpdate(id, req.body);
      if(!student) {
         res.status(404).send('This student does not exist!!!!');
         console.log('Please, introduce a valid id!!')
      }
      else {
         student.save()
         res.send('Success update!!!!!!')
         console.log('Success update!!!!!!')
      }
   } catch(e) {
      res.status(500).send(e.message)
      console.error(e.message)
   }
})

module.exports = app
