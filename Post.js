const Author = require('./Author')

class Post {
    constructor(title, content, author){
        this.title = title
        this.content = content
        this.author = author
        this.comment = []
    }


    addComment(comment){
        this.comment.push(comment)
        return this.comment
    }
}

module.exports = Post