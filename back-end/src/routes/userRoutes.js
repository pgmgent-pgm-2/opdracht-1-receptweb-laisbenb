const express = require('express');
const router = express.Router();
const { addUser, getUsers } = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', addUser);

module.exports = router;