// Aqui serão criados os eventos de Manipulação de DOM e templates
import { createPost } from './data.js';
// import { authRegistration } from '../cadastro/cadastro.js';

export const home = () => {
  const container = document.createElement('div');

  container.innerHTML = `
  <header class='menu'>
  <input type ='checkbox' id ='check'>
  <label for ='check' id='icone'><img src = './imagens/icone.png'></label>
  <span></span>
  <div class='barra'>
    <nav>
    <a href='/#home'><div class='link'>Home</div></a>
    <a href='/#perfil'><div class='link'>Perfil</div></a>
    <a href='/#bares'><div class='link'>Bares</div></a>
    <a href='/#mesas'><div class='link'>Mesas</div></a>
    <a id='sair'><div  class='link'>Sair</div></a>
    </nav>
    </div>
  
    </header>
    <h1>Stay Home Bar</h1>
<div id='nome1'> 
<p class='text-home'>Nome que está no banco de dados</p>
</div>
<div class ='post-area-container'>
<form class='post-area'>
<textarea id='comentario' type='text'> </textarea>
<div class='post-bttn-area'id='btn-comentar'>
<button class='input post-bttn' id='greeting-btn'>Postar</button>
</div>
</form>
</div>
<div class ='post-area-container'>
<form class='post-area'>
<textarea type="text" id='comentarios'></textarea>
<button id='like-btn'><img src = './imagens/brinde.jpg' width='50' height='50'></button>
<h1  id='like'></h1>
</form>
</div>

  `;
  const post = container.querySelector('#comentario');
  const btnPost = container.querySelector('#btn-comentar');
  const postMessage = container.querySelector('#comentarios');
  const btnSair = container.querySelector('#sair');
;
  const postTemplate = (array) => {
    postMessage.innerHTML = array.map(post => `${post.text}`).join('');
  };

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    postMessage.innerHTML = '';
    readPosts(postTemplate);
  });
btnSair.addEventListener('click', (event)=>{
  event.preventDefault();
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href = '/#login';
    window.location.reload(true);
    console.log('deu bom sair');
  }).catch(function(error) {
    // An error happened.
    console.log('deu ruimmm');
  });
})

/* const likeBtn = container.querySelector('#like-btn');
const like = container.querySelector('#like');

likeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  createLike( );
  like.innerHTML = 0 + 1;
}); */

  return container;
};

