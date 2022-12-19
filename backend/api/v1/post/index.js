const express = require('express')
const passport = require('../utils/auth/local')
const send = require('../utils/send')

const {
    create,
    index_load,
    View_post
} = require('./controller')
const {
    post_upload,
    post_load,
} = require('./middlewares')
const postRouter = express.Router();

postRouter.post('/upload', post_upload, create, send);

postRouter.get('/', post_load, index_load, send);

postRouter.get('/view', post_load, View_post, send)

module.exports = postRouter