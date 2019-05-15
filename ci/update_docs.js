const axios = require('axios')
const collection = require('../postman_collection.json')
var apiKey = '8ef445f78b0c419db6bfdc92d3225a56';
var collectionId = '2147941-fc12cf90-7c58-4964-ad32-9d7ff6a49893';

updateDocs()

async function updateDocs () {
  try {
    const update = await axios.request({
      method: 'put',
      params: { apiKey },
      url: `https://api.getpostman.com/collections/${collectionId}`,
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
