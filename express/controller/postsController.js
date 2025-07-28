// Simulação de um JSON
let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Busca todos os posts
export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);

  // Verifica se há um limite nos queries
  if (!isNaN(limit) && limit > 0) {
    // Retorna dados baseado no limite
    return res.status(200).json(posts.slice(0, limit));
  }

  // status() retorna o status
  res.status(200).json(posts);
};

// Busca apenas um post
export const getPostById = (req, res, next) => {
  // console.log(req.params); // Pegar os parâmetros de uma requisição
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    // return res.status(404).json({ error: `ID ${id} não encontrado!` });
    const err = new Error(`ID ${id} não encontrado!`);
    err.status = 404;
    return next(err);
  }

  res.status(200).json(post);
};

// Cria um post
export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    // return res.status(400).json({ error: "Coloque um título, por favor." });
    const err = new Error(`Insira um título, por favor.`);
    err.status = 400;
    return next(err);
  }

  posts.push(newPost);
  res.status(201).json(posts);
};

// Atualiza um post
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    // return res.status(404).json({ error: `ID ${id} não encontrado!` });
    const err = new Error(`ID ${id} não encontrado!`);
    err.status = 404;
    return next(err);
  }

  post.title = req.body.title;

  res.status(200).json(post);
};

// Exclui um post
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    // return res.status(404).json({ error: `ID ${id} não encontrado!` });
    const err = new Error(`ID ${id} não encontrado!`);
    err.status = 404;
    return next(err);
  }

  posts = posts.filter((post) => post.id !== id); // Retorna todos os posts, exceto o que foi deletado
  res.status(200).json(post);
};
