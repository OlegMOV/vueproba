const express = require('express')
const fileUpload = require('express-fileupload')
const userRouter = require('./routes/user.routes')
const dataRouter = require('./routes/data.routes')
const config = require('config')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const corsMiddleware = require('./middleware/cors')

const PORT = config.get('Server.port') || 5000

const app = express()
app.use(express.static(path.join(__dirname, '/uploads')));
// app.use(express.static('public'));
app.use(corsMiddleware)

app.use(passport.initialize())
  // app.use(passport.session())
require('./config/pasport')(passport)
app.use(fileUpload())

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/data', dataRouter)

async function start() {
  try {
    await mongoose.connect(config.get('User.dbConfig.mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`Aplication has been started on port ${PORT}...`))
  } catch (error) {
    console.log(`Server error ${error.message}`)
    process.exit(1)
  }
}

start()