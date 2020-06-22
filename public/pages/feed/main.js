
  import { createPost, readPosts, editPost, deletePost, likePost
    /*, creatNewComent, readComent*/ } from './data.js';
 
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

<section class='entire-container'>
 <div class='perfil-container'>
  <section class='perfil-style'>
  <img class="foto-style" src="./imagens/fotodeperfil.jpg">
  <h1 id='usuario'class="text-style"></h1>
  <p class="text-style">Sou muito feliz!</p>
  </section>
</div>

<div class= 'post-and-coment'>
<section class='post-container'>
  <form class='post-area'>
  <textarea id='post-text' class="textarea-style" rows="5" cols="10"
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

  const post = container.querySelector('#post-text');
  const btnPost = container.querySelector('#btn-comentar');
  const postMessage = container.querySelector('#comentarios');
  const btnSair = container.querySelector('#sair');
  const postUser = container.querySelector('#usuario');

 
  const postTemplate = (array, nome) => { 
    postUser.innerHTML = nome;
    postMessage.innerHTML = '';
    const containerDivNova = document.createElement('div');
    postMessage.innerHTML = array.map( post => 
    `<section class='posted-area'>
      <h1>${post.user}</h1>
    <span>${post.date}</span>
  
    <span>${post.time}</span>
    <div class='post-box'>${post.text}</div>
    <div class='btn-area-posted'> 
    <button class='feed-bttn' id='like-btn' data-like ='${post.idDoc}'><i class="fas fa-glass-cheers"> </i></button> 
    <p id='numbers-like'>${post.like}<p>
    <button class='feed-bttn' id='deletar'  data-delete = '${post.idDoc}'><i class="far fa-trash-alt"></i></button>
    <button class='feed-bttn' id='editar' data-edit = '${post.idDoc}'><i class="fas fa-edit"></i></button>
    <button class='feed-bttn' id='comentar' data-post = '${post.idDoc}'>Comentar</button>
    </div></section><br>
    `).join('');
    postMessage.appendChild(containerDivNova);
   
// <div id='post-comentario" ></div><br>
    const editEvent = () => {
      const btnEdit = container.querySelectorAll('#editar');
      btnEdit.forEach(element => {
        element.addEventListener('click', (event) => {
        event.preventDefault();
        editPost(element.dataset.edit);
      });
    });
  };
    const deletEvent = () => {
      const btnDel = container.querySelectorAll('#deletar');
      btnDel.forEach(element => {
        element.addEventListener('click', (event) => {
          event.preventDefault();
          deletePost(element.dataset.delete);
        });
      });
    };
    const likeEvent = () => {
      const likeBttn = container.querySelectorAll('#like-btn');
      likeBttn.forEach(element => {
      element.addEventListener('click', (event) => {
       event.preventDefault();
       likePost(element.dataset.like);
      });
      });
     } ;

    /* template para comentar post
    const comentario = container.querySelector('#post-comentario');
    const comentTemplate = (array) => {
    comentario.innerHTML = '';
    const containerComent = document.createElement('div');
    comentario.innerHTML = array.map( post => `<section class='posted-area'>
    <h1>${post.user}</h1>
    <textarea class='post-box'>${post.text}</textarea>
    <div class='btn-area-posted'> 
    <button class='feed-bttn' id='like-btn' data-like ='${post.idDoc}'><i class="fas fa-glass-cheers"> </i></button> 
    <p id='numbers-like'>${post.like}<p>
    <button class='feed-bttn' id='deletar'  data-delete = '${post.idDoc}'><i class="far fa-trash-alt"></i></button>
    <button class='feed-bttn' id='editar' data-edit = '${post.idDoc}'><i class="fas fa-edit"></i></button>
    </div></section><br>`).join('');
      postMessage.appendChild(containerComent);
    };*/
    /*const comentEvent = () => {
      const bntComent = container.querySelector('#comentar');
      bntComent.addEventListener('click', (event) => {
        event.preventDefault();
        comentario.innerHTML = comentTemplate;

      });
    };*/


    editEvent();
    deletEvent();
    likeEvent();
  };

  readPosts(postTemplate);


  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    post.value = '';
  });

 
  

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