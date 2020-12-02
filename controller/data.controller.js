const Abonents = require('../models/Abonents')
const Group = require('../models/Group')
const { saveImg } = require('../services/fileOperations')
const { getOneRecord, getRecords } = require('../services/dbOperations')


class DataController {

  async createRecord(req, res) {
    try {
      let nameFileImg = ''
        // Перевірка наявності файлів
      console.log('FILE', req.files);
      if (req.files || (req.files && Object.keys(req.files).length > 0)) {
        nameFileImg = saveImg(req.files.sampleFile)
      }
      const { firstName, lastName, phone, group } = req.body
      let idGrop = await Group.findOne({ name: group })
      if (idGrop === null) {
        let gg = new Group({ name: group })
        idGrop = await gg.save()
      }
      let newRecord = new Abonents({ firstName, lastName, phone, group: idGrop._id, avatar: nameFileImg })
      let newAbonent = await newRecord.save()
        //  Інші дані
      res.status(201).json({ message: `Success ${newAbonent._id}: ${firstName}` })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Record was not created" })
    }
  }
  async getRecords(req, res) {
    try {
      let status = false
      let data = { massage: 'Not found' }
      const { page, nRows, id } = req.query
      console.log('in server', page, nRows, id)
      if (id !== undefined) {
        [status, data] = await getOneRecord(id)
        console.log('Send on client abonent: ', data)
      } else {
        let startRec = parseInt(page)
        if (!Number.isInteger(startRec)) startRec = 0
        let colRec = parseInt(nRows)
        if (!Number.isInteger(startRec)) startRec = 10;
        [status, data] = await getRecords(startRec, colRec)
        console.log('Send on client abonents: ', data.length)
      }
      if (status) return res.json(data)
      else return res.status(400).json(data)
    } catch (error) {
      console.log(`ERROR: logIn ${error}`)
      res.status(500).json({ message: 'Error in query' })
    }
  }
  async updateOneRecord(req, res) {
    try {
      const { id, firstName, lastName, phone, group } = req.body
        // Перевірка наявності файлів
      let nameFileImg = ''
      if (req.files || (req.files && Object.keys(req.files).length > 0)) {
        nameFileImg = saveImg(req.files.sampleFile)
      }
      let idGrop = await Group.findOne({ name: group })
      if (idGrop === null) {
        let gg = new Group({ name: group })
        idGrop = await gg.save()
      }
      let updateAbonent = await Abonents.updateOne({ _id: id }, { firstName, lastName, phone, group: idGrop._id, avatar: nameFileImg })
      res.json({ message: `Success ${updateAbonent._id}: ${firstName}` })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Record was not updated" })
    }
  }
  async deleteOneRecord(req, res) {
    try {
      const { id } = req.body
      console.log('from delete', req.body)
      let delAbonent = await Abonents.deleteOne({ _id: id })
      if (delAbonent.deletedCount == 1) return res.json({ message: `Success delete abonent` })
      res.status(500).json({ message: "Record was not deleted" })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Record was not deleted" })
    }

  }
}

module.exports = new DataController()