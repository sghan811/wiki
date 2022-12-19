const {Post, I_load, vPost} = require('./Post');

module.exports = {
    create: (req, res, next) => {
        const post = req.body
        const user = req.user.username
        console.log(typeof(user))
        try {
            new Post({
                uploader: user,
                ...post
            })
            .save()
            .then(() =>{
                return next()
            }
            )
            .catch(err => next(err))
        } catch (err) {
            next(err)
        }
    },
    index_load: async(req, res, next) => {
        try {
            res.locals.data.posts = await I_load()
            next()
        } catch (err) {
            next(err)
        }
    },
    View_post: async(req, res, next) => {
        try {
            res.locals.data.posts = await vPost(req)
            console.log(res.locals.data.posts)
            next()
        } catch (err) {
            next(err)
        }
    }
}