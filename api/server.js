const express = require('express')

const server = express()

server.use(express.json())

server.use('/', (req, res) => {
    res.send('server is running')
})

module.exports = server