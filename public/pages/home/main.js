// Aqui serão criados os eventos de Manipulação de DOM e templates
import { createPost, readPosts/*, deletePost,editPost*/} from './data.js';
// import { authRegistration } from '../cadastro/cadastro.js';

export const home = () => {
  const container = document.createElement('div');

  container.innerHTML = `
  <div class='feed-container cor-menu'>
  <header class= 'menu-inicial'>
  <div class='menu>
  <input type ='checkbox' id ='check'>
  <label for ='check' id='icone'><img src = './imagens/icone.png'></label>
  <div class='barra'>
    <nav>
    <a href='/#home'><div class='link'>Home</div></a>
    <a href='/#perfil'><div class='link'>Perfil</div></a>
    <a href='/#bares'><div class='link'>Bares</div></a>
    <a href='/#mesas'><div class='link'>Mesas</div></a>
    <a id='sair'><div  class='link'>Sair</div></a>
    </nav>
    </div>
  </div>
  </header>
  <div class='title'>
  <h1>Stay Home Bar</h1>
  </div>
  </div>

 <div class='perfil-container'>
  <section class='perfil-style'>
  <img class="foto-style" src="./imagens/fotodeperfil.jpg">
  </section>
  <section class="bio-infos">
  <h1 class="text-style">Ana maria</h1>
  <p class="text-style">Sou muito feliz!</p>
</section>
</div>

<section class='post-container'>
  <div class='post-box'>
  <form class='post-area'>
  <textarea id='post-text' name="post" class="textarea-style" rows="5" cols="10"
  placeholder="Escreva uma mensagem."></textarea>
  <button type="submit" id = 'btn-comentar' class="btn-style nput post-bttn">Postar</button>
  </form>
  </div>
  </section>

  <section class='newpost-container'>
  <form class='post-box'>
  <ul>
  <li id='comentarios'></li>
  </ul>
  </form>
  </section>
  `;
  const post = container.querySelector('#post-text');
  const btnPost = container.querySelector('#btn-comentar');
  const postMessage = container.querySelector('#comentarios');
  const btnSair = container.querySelector('#sair');
 /* const btnDel = container.querySelector('#deletar');
  const btnEdit = container.querySelector('#editar');
*/

 const postTemplate = (array) => {
    postMessage.innerHTML = array.map(post => `<div class='post-area' >${post.text}
    
    <button id='like-btn'><img src = './imagens/brinde.jpg' width='50' height='50'></button>
    </button> <button id='deletar'>Deletar</button>
    <button id='editar'>Editar</button></div>`).join('');
  };


  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    //postMessage.innerHTML = '';
    readPosts(postTemplate);
});

/*  btnDel.addEventListener('click', (event) => {
    event.preventDefault();
    deletePost(post.value);
});
  btnEdit.addEventListener('click', (event) => {
    event.preventDefault();
    editPost(post.value);
});
*/

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
