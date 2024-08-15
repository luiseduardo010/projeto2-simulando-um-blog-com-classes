const Comment = require('./Comment')
const Author = require('./Author')
const Post = require('./Post')

const firstAuthor = new Author (
    'Miguel',
)

const firstPost = new Post (
    'Esse é o título do post',
    'Conteúdo de do post',
    firstAuthor
)

const firstComment = new Comment(
    'Willian',
    'Que incível!!',
)

const secondComment = new Comment (
    'Virginia',
    'Você de novo por aqui.'
)

firstAuthor.addPost(firstPost)
firstPost.addComment(firstComment)
firstPost.addComment(secondComment)
console.log(firstAuthor)
console.log(firstPost)