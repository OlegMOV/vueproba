const Router = require('express')
const { check } = require('express-validator')
const UserController = require('../controller/user.controller')
const router = new Router()

// api/user/regist
router.post('/regist', [
  check('email').isEmail(),
  check('password', 'Shot password').isLength({ min: 5 }),
  check('name')
  .not().isEmpty()
  .trim()
  .escape()
], UserController.createUser)

// api/user/login
router.post('/login', [
  check('email').isEmail(),
  check('password').isLength({ min: 5 })
], UserController.logInUser)

module.exports = router