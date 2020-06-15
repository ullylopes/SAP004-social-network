// Aqui serão criados os eventos de Manipulação de DOM e templates
import { createPost, readPosts } from './data.js';
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

<div class='post-container'>
  <form class='post-area'>
  <textarea id='post-text' name="post" class="textarea-style" rows="5" cols="10"
  placeholder="Escreva uma mensagem."></textarea>
  <div class="post-btn-area" id='bttn-post>
  <button class='btn-style'><img src='imagens/foto.png'></button>
  <button type="submit" id = 'btn-comentar' class="btn-style input post-bttn">Postar</button>
  </form>
  </div>
  </div>

  <section class='print-post-container'>
  <div>
  <p class='comentarios'></p>
  </div>
  </section>
  </div>
  </div>
  `;
  const post = container.querySelector('#post-text');
  const btnPost = container.querySelector('#btn-comentar');
  const postMessage = container.querySelector('#comentarios');
  const btnSair = container.querySelector('#sair');
;
  const postTemplate = (array) => {
    postMessage.innerHTML = array.map(post => `${post.text}`).join('');
  };

 /* btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    postMessage.innerHTML = '';
    readPosts(postTemplate);
  });*/
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


  return container;
};

