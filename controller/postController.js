let posts = [
    {id: 1, content: "Hello World!"},
    {id: 2, content: "Hello World2!"}
]

//Get all posts
exports.getPosts = (req, res) => {
    res.json(posts);
}

//Create a new post
exports.createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        content: req.body.content
    }
    posts.push(newPost);
    res.json(newPost);
}

//Get a post by id
exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if(!post) return res.status(404).send("Post not found");
    res.json(post);
}

//update a post by id
exports.updatePostById = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if(!post) return res.status(404).send("post not found");
    post.content = req.body.content;
    res.json(post);
}

//delete a post by id
exports.deletePostById = (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.json({message: "post deleted"})
}
