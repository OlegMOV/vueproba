const path = require('path')
const fs = require('fs')
const config = require('config')

const pathUpload = config.get('Server.uploadDir')

function getNameFile(nameFile) {
  let ext = nameFile.split('.')[1]
  let nextInd = 1
  if (!fs.existsSync(pathUpload))
    fs.mkdirSync(pathUpload)
  else {
    let files = fs.readdirSync(pathUpload)
    let sufixes = files.map(item => item.split('.')[0].slice(-3)).filter(i => Number.isInteger(parseInt(i)))
    nextInd = Math.max(...sufixes.map(i => parseInt(i))) + 1
  }
  return `img_${String(nextInd).padStart(3,'0')}.${ext}`
}
exports.saveImg = function(sampleFile) {
  if (sampleFile.mimetype.startsWith('image/')) {
    let newName = getNameFile(sampleFile.name)
    console.log('Nmae img', newName);
    sampleFile.mv(path.join(pathUpload, newName), function(err) {
      if (err)
        console.log('Problems with save file', err)
    })
    return newName
  } else
    return null
}