// Aqui serão criados os eventos de Manipulação de DOM e templates
import { createPost } from './data.js';
// import { authRegistration } from '../cadastro/cadastro.js';

export const home = () => {
  const container = document.createElement('div');

  container.innerHTML = `
  <div class='body-home container'>
  <header class='flex'>
  <div class='menu'>
  <input type ='checkbox' id ='check'>
  <label for ='check' id='icone'><img src = './imagens/icone.png'></label>
  <span></span>
  <div class='barra'>
    <nav>
    <a href='/#home'><div class='link'>Home</div></a>
    <a href='/#perfil'><div class='link'>Perfil</div></a>
    <a href='/#bares'><div class='link'>Bares</div></a>
    <a href='/#mesas'><div class='link'>Mesas</div></a>
    <a href='/#login'><div class='link'>Sair</div></a>
    </nav>
    </div>
    <h1>Stay Home Bar</h1>
  </header>
 
<div id='nome1'> 
<p class='text-home'>Nome que está no banco de dados</p>
</div>
<div>
<input id='comentario' type='text'> </input>
<button id='btn-comentar'>Publicar</button>
</div>
<h1 id='comentarios'></h1>
    </div>
  `;
  const post = container.querySelector('#comentario');
  const btnPost = container.querySelector('#btn-comentar');
  // const postMessage = container.querySelector('#comentarios');

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    // postMessage.innerHTML = mensagem(post.value);
  });

  return container;
};
  
  
  
  
  
  
  
  
  
  
  
  /*const name = container.querySelector('#name');
  const greetingBtn = container.querySelector('#greeting-btn');
  const greetingMessage = container.querySelector('#greeting-message');

  greetingBtn.addEventListener('click', (event) => {
    event.preventDefault();
    greetingMessage.innerHTML = greeting(name.value);
  });*/

/*  <div id='comentarios'></div>
      <input id='name' type='text'>
      <button id='greeting-btn'>Dizer Oi</button>
      <div id='greeting-message'></div>*/

/*  const nome = authRegistration().querySelector('#nome-usuario');
  console.log(nome);
  const nome11 = container.querySelector('#nome1');
  nome11.innerHTML = identificacao(nome.value);
  console.log(nome.value);*/


  


