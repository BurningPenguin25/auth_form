const redis = require('redis')
const clientRed = redis.createClient({
    port: 6379,
    host: '127.0.0.1'
})

clientRed.on('req', ()=>{
console.log('sent')
})

module.exports = clientRed
