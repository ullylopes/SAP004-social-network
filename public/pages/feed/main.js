// Aqui serão criados os eventos de Manipulação de DOM e templates
import { createPost, readPosts /* deletePost, */, editPost } from './data.js';
// import { authRegistration } from '../cadastro/cadastro.js';

export const home = () => {
  const container = document.createElement('div');
  container.className = 'container-feed';

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
  <h1 class="text-style">Ana maria</h1>
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
  </div>
  </form>
  </section>
  <section class='newpost-container'>
  <ul>
  <li id='comentarios'></li>
  </ul>
 
  </section>
  </div>
  `;

  const post = container.querySelector('#post-text');
  const btnPost = container.querySelector('#btn-comentar');
  const postMessage = container.querySelector('#comentarios');
  const btnSair = container.querySelector('#sair');
  /* const btnDel = container.querySelector('#deletar'); */
/*   const btnEdit = container.querySelector('#editar');
 */

  const postTemplate = (array) => {
    postMessage.innerHTML = '';
    const containerDivNova = document.createElement('div')
    containerDivNova.innerHTML = array.map(post => `<div class='post-box'>${post.text}</div>
   <div class='btn-area-posted'> <button id='like-btn'><img src = './imagens/brinde.jpg' width='25' height='25'></button>
   </button> <button class='btn-style input post-bttn' id='deletar'>Deletar</button>
   <button class='btn-style input post-bttn' data-edit = '${post.idDoc}' id='editar'>Editar</button></div><br>`).join('');
    postMessage.appendChild(containerDivNova);
   editEvent();
};
  readPosts(postTemplate);

/*   const postID = (array) => {
    let ids = array.map( post => post.idDoc);
  };
 */

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
  });

  const editEvent = () => {
    const btnEdit = container.querySelector('#editar');
    btnEdit.addEventListener('click', (event) => {
      event.preventDefault();
      editPost(btnEdit.dataset.edit);
    });
  };
  btnSair.addEventListener('click', (event) => {
    event.preventDefault();
    firebase.auth().signOut().then(() => {
      window.location.href = '/#login';
      window.location.reload(true);
    }).catch(() => {
    });
  });
  


  /*  btnDel.addEventListener('click', (event) => {
    event.preventDefault();
    deletePost(post.value);
}); */

  return container;
};
