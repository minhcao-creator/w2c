const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')

const User = require('../models/User')
const UserController = require('../controllers/user')

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, UserController.getUser)

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', UserController.register)

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post('/login', UserController.login)

module.exports = router
