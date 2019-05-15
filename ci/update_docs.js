const axios = require('axios')
const collection = require('../postman_collection.json')
var apiKey = '8ef445f78b0c419db6bfdc92d3225a56';
var collectionId = '2147941-8f4bebf2-3e0d-4128-b066-b35ed782ee76';

updateDocs()

async function updateDocs () {
  try {
    const update = await axios.request({
      method: 'put',
      headers: { 'X-Api-Key' : apiKey, 'Content-Type' : 'application/json' },
      url: `https://api.getpostman.com/collections/${collectionId}`,
      data: { collection : collection }
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
