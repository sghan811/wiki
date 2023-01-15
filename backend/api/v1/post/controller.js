const {Post, I_load, vPost, newsPost} = require('./Post');

module.exports = {
    create: (req, res, next) => {
        const post = req.body
        const user = req.user.username
        var in_data = true
        var category_list = ["news","test","servers","events","issues"];
        if(category_list.indexOf(post.category) < 0){
            in_data = false
        }
        console.log(in_data)
        if(in_data){
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
        }else{
            next("unknown category")
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
    },
    View_news: async(req, res, next) => {
        try {
            res.locals.data.posts = await newsPost(req)
            console.log(res.locals.data.posts)
            next()
        }catch (err){
            next(err)
        }
    }
}