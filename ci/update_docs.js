const axios = require('axios')
var conf = require('./config')
const collection = require('../postman_collection.json')

updateDocs()

async function updateDocs () {
  try {
    const update = await axios.request({
      method: 'put',
      params: { conf.apikey },
      url: `https://api.getpostman.com/collections/${conf.collectionId}`,
      data: { collection }
    })

    if (update) {
      console.log(`Postman collection ${collection.info.name} updated.`)
    } else {
      console.log('Updating Postman collection failed!')
    }
  } catch (e) {
    console.log(e.response.data)
  }
}
