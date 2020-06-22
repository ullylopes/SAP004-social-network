import {
  createPost,
  readPosts,
  deletePost,
  editPost,
  likePost,
} from "./data.js";

export const home = () => {
  const container = document.createElement("div");
  container.className = "container-feed";

  container.innerHTML = `
  <section class='feed-container cor-menu'>
  <div class= 'menu-inicial'>
  <input type ='checkbox' id ='check'>
  <label for ='check' class='icone img-menu'><img src = './imagens/icone.png'></label>
    <nav class='nav'>
    <a href='/#home'><div class='link'>Home</div></a>
    <a href='/#perfil'><div class='link'>Perfil</div></a>
    <a href='/#bares'><div class='link'>Bares</div></a>
    <a href='/#mesas'><div class='link'>Mesas</div></a>
    <a id='sair'><div class='link'>Sair</div></a>
    </nav>
  </div>
  <div class='title'>
  <h1>Stay Home Bar</h1>
  </div>
  </section>

<section class='entire-container'>
 <div class='perfil-container'>
  <div class='perfil-style'>
  <img class="foto-style" src="./imagens/fotodeperfil.jpg">
  <h1 id='usuario'class="text-style"></h1>
  <p class="text-style">Sou muito feliz!</p>
  </div>
</div>

<div class= 'post-and-coment'>
<section class='post-container'>
  <form class='post-area'>
  <textarea id='post-text' name="post" class="textarea-style" rows="5" cols="10"
  placeholder="Escreva uma mensagem."></textarea>
  <div class="post-btn-area" id='bttn-post>   
  <button type='' class='feed-bttn'><i class='fas fa-images'></i></button>   
  <button type='submit' id ='btn-comentar' class='feed-bttn'>Postar</button>  
  </div>
  </form>
  </section>
  <section class='newpost-container'>
  <div class='li-posted' id='comentarios'></div>
  </section>
  </div>
  </section>

  <footer><p>&copy;Desenvolvido por Adélia, Sabrina e Ully</p></footer>
  `;

  const post = container.querySelector("#post-text");
  const btnPost = container.querySelector("#btn-comentar");
  const postMessage = container.querySelector("#comentarios");
  const btnSair = container.querySelector("#sair");
  const postUser = container.querySelector("#usuario");
  //const bntComentario = container.querySelector('#btn-comentario');
  //const Comentario = container.querySelector('#post-comentario');

  const postTemplate = (array, nome) => {
    postUser.innerHTML = nome;
    postMessage.innerHTML = "";
    const containerDivNova = document.createElement("div");
    postMessage.innerHTML = array
      .map(
        (post) =>
          `<section class='posted-area'>
    <h1 class='name'>Postado por: ${post.user}</h1>
    <span>${new Date().toLocaleDateString()}</span>
    <span>${new Date().getTime()}</span>
    <textarea class='post-box' value="Not editable" disabled="disabled" 
    contenteditable="false">${post.text}</textarea>
    <div class='btn-area-posted'> 
    <button class='feed-bttn' id='like-btn' data-like = '${
      post.idDoc
    }'><i class="fas fa-glass-cheers"> ${post.like} </i></button> 
    <button class='feed-bttn' id='deletar' data-delete='${
      post.idDoc
    }'><i class="far fa-trash-alt"></i></button>
    <button class='feed-bttn' id='btn-comentar'>Comentar</button>
    <button class='feed-bttn hide' id='btn-salvar' data-edit = '${
      post.idDoc
    }'>Salvar</button>
    <button class='feed-bttn ed1' id='editar' data-edit = '${
      post.idDoc
    }'> <i class="fas fa-edit"></i></button></div></section><br>`
      )
      .join("");
    postMessage.appendChild(containerDivNova);
    const texto = container.querySelector(".post-box");
    const btnSalvar = container.querySelector("#btn-salvar");
    const btnEdit = container.querySelector("#editar");
    const btnDel = container.querySelector("#deletar");

    const editEvent = (texto, btnSalvar, btnEdit) => {
      btnEdit.addEventListener("click", (event) => {
        event.preventDefault();
        texto.disabled = false;
        btnEdit.classList.add("hide"); // Oculta o botão editar
        btnSalvar.classList.remove("hide"); // Mostra o botão salvar
      });
    };

    const saveEditedEvent = (texto, btnSalvar, btnEdit) => {
      btnSalvar.addEventListener("click", (event) => {
        event.preventDefault();
        btnEdit.classList.remove("hide"); // Mostra o botão editar
        btnSalvar.classList.add("hide"); // Oculta o botão salvar
        editPost(btnSalvar.dataset.edit, texto.value);
      });
    };

    const likeEvent = () => {
      const likeBtn = container.querySelectorAll("#like-btn");
      likeBtn.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.preventDefault();
          likePost(element.dataset.like);
        });
      });
    };

    const deleteEvent = () => {
      const btnDel = container.querySelectorAll("#deletar");
      btnDel.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.preventDefault();
          deletePost(element.dataset.delete);
        });
      });
    };

    likeEvent();
    editEvent(texto, btnSalvar, btnEdit);
    deleteEvent(btnDel);
    saveEditedEvent(texto, btnSalvar, btnEdit);
  };

  readPosts(postTemplate);
  console.log("carregando o feed");

  btnPost.addEventListener("click", (event) => {
    event.preventDefault();
    post.innerHTML = "";
    createPost(post.value);
    post.value = "";
  });

  btnSair.addEventListener("click", (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = "/#login";
        window.location.reload(true);
      })
      .catch(() => {});
  });

  return container;
};
