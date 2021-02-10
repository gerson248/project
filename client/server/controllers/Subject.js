const Subject = require('../models/Subject')

/** Crear un curso **/
createSubject = (req,res) => {
   if(!req.body)
      return res.status(400).send('Must provide a subject')

   const subject = new Subject(req.body)

   if(!subject)
      return res.status(400).send('Subject not created')
   subject.save()
      .then(() => {
         return res.status(201).send('success insert')
      })
      .catch(err => {
         return res.status(400).json({
            err,
            message: 'subject not created'
         })
      })
}

/** Devuelve varios cursos **/
getSubjects = async (req,res) => {
   await Subject.find({}, (err,docs) => {
      if(err) {
         return res.status(400).json({
            error : err.message,
            sucess: false
         })
      }

      if(!docs.length) {
         return res.status(404).json({
            sucess: false,
            error : 'Not subjects created'
         })
      }

      return res.status(200).json({
         sucess: true,
         subjects : docs
      })
   })

}

/** Devuelve un curso **/
getSubject = async (req,res) => {
   await Subject.findById(req.params.id, (err,doc) => {
      if(err) {
         return res.status(400).json({
            error: err.message,
            sucess: false
         })
      }

      if(!doc) {
         return res.status(404).json({
            sucess: false,
            error : 'subject not found'
         })
      }

      return res.status(200).json({
         sucess: true,
         subject : doc
      })
   })
   .catch(e => {
      console.error(e.message)
   })
}

/** Elimina un curso **/
deleteSubject = async (req,res) => {
   await Subject.findByIdAndDelete(req.params.id, (err,subject) => {
      if(err) {
         return res.status(400).json({
            error: err.message,
            sucess: false
         })
      }

      if(!subject) {
         return res.status(404).json({
            sucess: false,
            error : 'subject not found'
         })
      }

      return res.status(200).json({
         sucess: true,
         message: 'subject deleted'
      })
   })
}

/** Actualiza un curso **/
updateSubject = (req,res) => {
   if(!req.body)
      return res.status(400).send('Must provide a subject')

   Subject.findById(req.params.id,(err,subject) => {
      if(err) {
         return res.status(400).json({
            error: err.message,
            sucess: false
         })
      }

      if(!subject) {
         return res.status(404).json({
            sucess: false,
            error : 'subject not found'
         })
      }

      subject.name = req.body.name
      subject.code = req.body.code
      subject.students = req.body.students
      subject.profesors = req.body.profesor
      subject.price = req.body.price
      subject.sales = req.body.sales
      subject.offers = req.body.offers

      subject.save()
         .then(() => {
            return res.status(201).json({
               sucess: true,
               message: 'subject updated!'
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

module.exports = {
   createSubject,
   getSubject,
   getSubjects,
   deleteSubject,
   updateSubject
}
