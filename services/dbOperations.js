const Abonents = require('../models/Abonents')
const Group = require('../models/Group')

module.exports.getOneRecord = async function(id) {
  try {
    let abonent = await Abonents.findById(id)
    if (abonent === null || abonent === undefined)
      return [false, { massage: 'Not found' }]
    let gr = await Group.findById(abonent.group, 'name')
    return [true, {
      id: id,
      firstName: abonent.firstName,
      lastName: abonent.lastName,
      phone: abonent.phone,
      group: gr.name,
      photo: abonent.avatar
    }]
  } catch (error) {
    return [false, { massage: 'Not found' }]
  }
}

module.exports.getRecords = async function(startRec, colRec) {
  try {
    let abonents = await Abonents.find({}).skip(startRec).limit(colRec)
    let data = []
    let gr = 1
    for (let item of abonents) {
      gr = await Group.findById(item.group, 'name')
      data.push({
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        phone: item.phone,
        group: gr.name
          // photo: item.avatar
      })
    }
    return [true, data]
  } catch (error) {
    return [false, { message: 'Error in query' }]
  }
}