const axios = require('axios')
const collection = require('../stock.json')
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdG9wbGlnaHR8MjA4NzEiLCJ1c2VybmFtZSI6ImhpcmVuc2hhaDExMSIsImVtYWlsIjoiaGlyZW5hbmFuZHNoYWhAb3V0bG9vay5jb20iLCJuYW1lIjoiSGlyZW4gU2hhaCIsImlhdCI6MTU1OTMzMzU3MCwia2V5Ijoic0dDalRIcXFYTUVzNDZwSkNDNkwifQ.yssNRz7nmUwLw2QhlVVNuort8jpTV8GiGxqdoyS-tGo";


updateDocs()

async function updateDocs() {
    try {
        const update = await axios.request({
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: `https://next-api.stoplight.io/projects/23747/files/stock.oas2.yml`,
            data: {
                content: collection,
                branch: 'version/1.0',
                commit_message: 'updating stock api'
            }
        })

        if (update) {
            console.log(`StopLight file updated.`)
            const modify = await axios.request({
                method: 'put',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                url: `https://next-api.stoplight.io/docs.release?id=3907`,
                data: {
                    "setLive": true
                }
            })
            if (modify) {
                console.log('StopLight doc published');
            }
          else
          {
            console.log('Publishing stoplight doc failed!');
          }

        } else {
            console.log('Updating stoplight collection failed!')
        }
    } catch (e) {
        console.log(e.response.data)
    }
}
