const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/taskController')

router.get('/all', Ctrl.all)
router.post('/addNote', Ctrl.addNote)
router.use('/del', Ctrl.del)

module.exports = router