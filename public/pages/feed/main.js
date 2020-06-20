import { createPost, readPosts, /*deletePost*/ editPost } from './data.js';


export const home = () => {
  const container = document.createElement('div');
  container.className ='container-feed';

  container.innerHTML = `
  <section class='feed-container cor-menu'>
  <div class= 'menu-inicial'>
  <input type ='checkbox' id ='check'>
  <label for ='check' class='icone'><img src = './imagens/icone.png'></label>
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

  
 <div class='perfil-container'>
  <section class='perfil-style'>
  <img class="foto-style" src="./imagens/fotodeperfil.jpg">
  </section>
  <section class="bio-infos">
  <h1 id='usuario'class="text-style"></h1>
  <p class="text-style">Sou muito feliz!</p>
</section>
</div>

<div class= 'post-and-coment'>
<section class='post-container'>
  <form class='post-area'>
  <textarea id='post-text' name="post" class="textarea-style" rows="5" cols="10"
  placeholder="Escreva uma mensagem."></textarea>
  <div class="post-btn-area" id='bttn-post>   
  <button class='btn-style'><img src='imagens/foto.png'></button>   
  <button type="submit" id = 'btn-comentar' class="btn-style input post-bttn">Postar</button>  
  <button id='editar'>Editar</button></div><br>
  </div>
  </form>
  </section>

  <section class='newpost-container' id='comentarios'>


  </section>
  </div>
  `;

  const post = container.querySelector('#post-text');
  const btnPost = container.querySelector('#btn-comentar');
  const postMessage = container.querySelector('#comentarios');
  const btnSair = container.querySelector('#sair');
  //const btnDel = container.querySelector('#deletar');
  const btnEdit = container.querySelector('#editar');
  const postUser = container.querySelector('#usuario');
  const bntComentario = container.querySelector('#btn-comentario');
  const Comentario = container.querySelector('#post-comentario');

  const postTemplate = (array, nome) => {
    postUser.innerHTML = nome;
    postMessage.innerHTML = array.map(post => `<h1>${post.userName}</h1>
    <div class='post-box'>${post.text}</div>
    <div class='btn-area-posted'> 
    <button id='like-btn'>
    <img src = './imagens/brinde.jpg' width='25' height='25'>
    </button>
    </button> <button class='btn-style input post-bttn' id='deletar'>Deletar</button>
    <button class='btn-style input post-bttn' id='btn-comentar'>Comentar</button>
    <button class='btn-style input post-bttn' id='editar'>Editar</button>
    </div>
    <section id='post-comentario'></section>`).join('');
  };
  readPosts(postTemplate);

  //template para comentar post
 /* const comentTemplate = () => {
    Comentario.innerHTML = `<div class='post-box'></div>
    <div class='btn-area-posted'> 
    <button id='like-btn'>
    <img src = './imagens/brinde.jpg' width='25' height='25'>
    </button>
    </button> <button class='btn-style input post-bttn' id='deletar'>Deletar</button>
    <button class='btn-style input post-bttn' id='btn-comentar'>Comentar</button>
    <button class='btn-style input post-bttn' id='editar'>Editar</button>
    </div>
    `;
  };*/

  /*btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
  });*/

  /*bntComentario.addEventListener('click', (event) => {
    event.preventDefault();
    comentTemplate();
  });*/

  btnEdit.addEventListener('click', (event) => {
    event.preventDefault();
    editPost();
  });

/*  const btnDel = container.querySelector('#deletar');
  btnDel.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicou');
   // deletePost(post.value);
  });*/

  btnSair.addEventListener('click', (event) => {
    event.preventDefault();
    firebase.auth().signOut().then(() => {
      window.location.href = '/#login';
      window.location.reload(true);
    }).catch(() => {
    });
  });


  return container;
};