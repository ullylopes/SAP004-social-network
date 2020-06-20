// Aqui serão criados os eventos de Manipulação de DOM e templates
import { createPost, readPosts/*, deletePost,editPost*/} from './data.js';
// import { authRegistration } from '../cadastro/cadastro.js';

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

<section class='entire-container'>
 <div class='perfil-container'>
  <section class='perfil-style'>
  <img class="foto-style" src="./imagens/fotodeperfil.jpg">
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
  <button type='' class='feed-bttn'><i class='fas fa-images'></i></button>   
  <button type='submit' id ='btn-comentar' class='feed-bttn'>Postar</button>  
  </div>
  </form>
  </section>

  <section class='newpost-container'>
  <form >
  <ul>
  <li class='li-posted' id='comentarios'></li>
  </ul>
  </form>
  </section>
  </div>
  </section>

  <footer><p>&copy;Desenvolvido por Adélia, Sabrina e Ully</p></footer>
  `;

  const post = container.querySelector('#post-text');
  const btnPost = container.querySelector('#btn-comentar');
  const postMessage = container.querySelector('#comentarios');
  const btnSair = container.querySelector('#sair');

// const btnDel = container.querySelector('#deletar');
// const btnEdit = container.querySelector('#editar');

  const postTemplate = (array) => {
    postMessage.innerHTML = array.map(post => `<section class='posted-area'>
   <button class='><i class="fas fa-ellipsis-h"></i></button><div class='post-box'>${post.text}</div>
   <div class='btn-area-posted'> <button class='feed-bttn' id='like-btn'><i class="fas fa-glass-cheers"> </i></button>
    </button> <button class='feed-bttn' id='deletar'><i class="far fa-trash-alt"></i></button>
    <button class='feed-bttn' id='editar'><i class="fas fa-edit"> </i></button></div></section><br>`).join('');
  };

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    //postMessage.innerHTML = '';
    readPosts(postTemplate);
});

// function like (event) {
//   const id = 
//   const likeBttn = document.querySelector('like-btn');
//   firebase.firestore().collection('post').doc(id).get()
//     .then((snap) => {
//       const likeCount = snap.data().likes + 1;
//       firebase.firestore().collection('post').doc(id).update({
//         likes: likeCount,
//       });
//       likeBttn.innerText = likeCount;
//     });
// }



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
