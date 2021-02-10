const express = require('express')
const subjectCtrl = require('../controllers/Subject')
const router = express.Router()

router.post('/subject', subjectCtrl.createSubject)
router.put('/subject/:id', subjectCtrl.updateSubject)
router.delete('/subject/:id', subjectCtrl.deleteSubject)
router.get('/subject/:id', subjectCtrl.getSubject)
router.get('/subjects', subjectCtrl.getSubjects)

module.exports = router
