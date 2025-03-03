const express = require('express');

const register = require('../controllers/register');
const login = require('../controllers/login')
const forgetPassword = require('../controllers/forgetPassword')

const router = express.Router();

router.post('/register',register)
router.post('/login',login);
router.post('/forget/password',forgetPassword)

module.exports = router

