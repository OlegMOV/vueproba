const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/Users')

async function verify(req, res, next) {
  try {
    let getToken = req.headers.authorization.split(' ')[1]
    console.log(getToken);
    if (!getToken) {
      return res.status(403).json({ message: "Error access" })
    }
    let getData = await jwt.verify(getToken, config.get('User.ACCESS_TOKEN_SECRET'))
    console.log(getData);
    const userIn = await User.findById(getData.userId)
    if (!userIn) {
      return res.status(401).json({ message: "Unauthorized access" })
    }
    next()
  } catch (error) {
    console.log(error)
    return res.status(403).json({ message: error.message || "Error access" })
  }
}

module.exports = verify