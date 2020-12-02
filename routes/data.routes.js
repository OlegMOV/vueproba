const Router = require('express')
const DataController = require('../controller/data.controller')
  // const verify = require('../middleware/verifytoken')
const router = new Router()
const passport = require('passport')

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), DataController.getRecords) // 
  .post(passport.authenticate('jwt', { session: false }), DataController.createRecord) //
  .put(passport.authenticate('jwt', { session: false }), DataController.updateOneRecord) //
  .delete(passport.authenticate('jwt', { session: false }), DataController.deleteOneRecord) //

module.exports = router