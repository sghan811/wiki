const express = require('express')
const passport = require('../utils/auth/local')
const send = require('../utils/send')

const {
    create,
    index_load
} = require('./controller')
const {
    post_upload,
    post_load
} = require('./middlewares')
const postRouter = express.Router();

postRouter.post('/upload', post_upload, create, send);

postRouter.get('/', post_load, index_load, send);

module.exports = postRouter