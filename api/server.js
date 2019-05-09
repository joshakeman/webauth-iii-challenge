const express = require('express')
const authRouter = require('../auth/auth-router')
const userRouter = require('../users/users-router')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', userRouter)

server.use('/', (req, res) => {
    res.send('server is running')
})

module.exports = server