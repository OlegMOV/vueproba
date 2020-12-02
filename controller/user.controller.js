const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/Users')


class UserController {

  async createUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(`ERROR: validation ${errors.array()}`)
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, surname, email, password } = req.body
      const candidate = await User.findOne({ email })
      if (candidate) {
        return res.status(409).json({ message: `This is email ${email} alredy exists` })
      }
      const hashedPass = await bcrypt.hash(password, 10)
      const newUser = new User({ name: name, surname: surname, email: email, password: hashedPass })
      if (newUser === await newUser.save()) {
        console.log(`Create new user ${name + ' '+ surname}`)
        res.status(201).json({ message: "User created" })
      } else {
        console.log(`ERROR: new user ${name + ' '+ surname} was not created`)
        res.status(500).json({ status: false, message: "User was not created" })
      }
    } catch (error) {
      res.status(500).json({ message: "User was not created" })
    }


  }
  async logInUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(`ERROR: validation ${errors.array()}`)
      return res.status(401).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (!user) {
        res.status(400).json({ message: `User [${email}] not found` })
      }
      const isMatch = bcrypt.compareSync(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ message: 'Wrong password' })
      }
      const token = jwt.sign({ userId: user.id },
        config.get('User.ACCESS_TOKEN_SECRET'), { expiresIn: config.get('User.ACCESS_TOKEN_LIFE') }
      )
      res.json({ token: 'Bearer ' + token, userId: user.id })
    } catch (error) {
      console.log(`ERROR: logIn ${error}`)
    }
  }
}

module.exports = new UserController()


// "email": "ex@ex.ua",
//     "password": "111111"