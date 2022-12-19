const db = require('../../../db/config');
const { modelUtils, modelStatics } = require('../utils');
const schema = require('./PostSchema');

function Post({id=null, title, contant, img, uploader, sub, uptime}){
    this.id = this._validate(id, 'id');
    this.sub = this._validate(sub,'sub');
    this.uptime = this._validate(uptime,'uptime')
    this.title = this._validate(title, 'title');
    this.contant = this._validate(contant, 'contant');
    this.img = this._validate(img, 'img');
    this.uploader = this._validate(uploader, 'uploader');
}

const postStatics = modelStatics(db, 'posts');
postStatics.findBytitle = (title2) => {
    return db.query(`
        SELECT * FROM posts
        WHERE title = $1
        OTDER BY id ASC
    `,title2)
}

Object.setPrototypeOf(Post, postStatics);
Post.prototype = Object.assign(Post.prototype, modelUtils(schema));

Post.prototype.save = function() {
    return db.one(`
        INSERT INTO posts (
            title, contant, img, uploader, sub, uptime
        ) VALUES (
            $/title/, $/contant/, $/img/, $/uploader/, $/sub/, ${Date.now()}
        )
        RETURNING *
    `, this)
    .then(post => this._modify(post))
}

function I_load() {
    const posts = db.query(`SELECT * FROM posts LIMIT 10;`)
    return posts
}
function vPost(req) {
    const posts = db.query(`SELECT * FROM posts where id=${req.query.id};`)
    console.log(req.query.id)
    return posts
}

module.exports = {Post, I_load, vPost};