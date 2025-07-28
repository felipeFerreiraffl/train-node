const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const createButton = document.querySelector("#create-post-btn");

// Pegar os posts e mostrá-los
async function showPosts() {
  try {
    const res = await fetch("http://localhost:8080/api/posts");
    if (!res.ok) {
      throw new Error("Falhou em pegar posts");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.error(`Erro ao buscar posts: ${error}`);
  }
}

// Criar posts
async function createPosts(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const title = formData.get("title");

  try {
    const res = await fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Falhou em criar um post");
    }

    const newPost = await res.json();

    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    output.appendChild(postEl);
    showPosts();
  } catch (error) {
    console.error(`Erro ao criar posts: ${error}`);
  }
}

button.addEventListener("click", showPosts);
createButton.addEventListener("submit", createPosts);
