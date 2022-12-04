const db = require('../../../db/config');
const { modelUtils, modelStatics } = require('../utils');
const schema = require('./PostSchema');

function Post({id=null, title, contant, img, uploader}){
    this.id = this._validate(id, 'id');
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
            title, contant, img, uploader
        ) VALUES (
            $/title/, $/contant/, $/img/, $/uploader/
        )
        RETURNING *
    `, this)
    .then(post => this._modify(post))
}

const I_load = async() => {
    const posts = await db.query(`SELECT * FROM posts LIMIT 10;`)
    return posts
}

module.exports = {Post, I_load};