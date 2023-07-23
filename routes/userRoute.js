const express = require('express');

const userController = require('../controllers/userController')

const router = express.Router();

router.get('/users',userController.getUsers);

router.post('/users',userController.postUsers);

router.delete('/delete-user/:id',userController.deleteUser)

module.exports = router