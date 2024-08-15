const Post = require('./Post')

class Author{
    constructor(author){
        this.author = author
        this.posts = []
    }

    addPost(newPost){
        this.posts.push(newPost)
    }
}

module.exports = Author