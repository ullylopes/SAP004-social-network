import {
  createPost, readPosts, editPost, deletePost, likePost
  , creatNewComent, readComent} from './data.js';

export const feed = () => {
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
    postMessage.innerHTML = array.map(post =>
      `<section class='posted-area'>
      <div><h1>${post.user}</h1>
    <span>${post.date}</span>
    <span>${post.time}</span></div>
    <textarea class='post-box' value="Not editable" disabled="disabled" 
    contenteditable="false">${post.text}</textarea>
    <div class='btn-area-posted'> 
    <button class='feed-bttn' id='like-btn' data-like = '${post.idDoc}'><i class="fas fa-glass-cheers"> ${post.like} </i></button> 
    <button class='feed-bttn' id='deletar' data-delete='${post.idDoc}'><i class="far fa-trash-alt"></i></button>
    <button class='feed-bttn'  id='btn-comentar' data-comentar='${post.idDoc}'>Ver Comentários</button>
    <button class='feed-bttn hide' id='btn-salvar' data-edit = '${post.idDoc}'>salvar</button>
    <button class='feed-bttn ed1 ' id='editar' data-edit = '${post.idDoc}'> <i class="fas fa-edit"></i></button></div></section>
    <section class='newpost-container'>
    <div class='li-posted' id='post-coment'>
    </div>
    </section><br>`).join("");
    postMessage.appendChild(containerDivNova);

    const editEvent = () => {
      const btnEdit = container.querySelectorAll("#editar");
      const btnSalvar = container.querySelectorAll("#btn-salvar");
      const texto = container.querySelectorAll(".post-box");
      btnEdit.forEach(element => {
        element.addEventListener("click", (event) => {
          event.preventDefault();
          texto.forEach(element => {
            element.disabled = false;
          });
          element.classList.add("hide"); // Oculta o botão editar
          btnSalvar.forEach(element=> {
            element.classList.remove("hide"); // Mostra o botão salvar
          });
      });
    });
  };
    const saveEditedEvent = () => {
      const btnEdit = container.querySelector("#editar");
      const texto = container.querySelector(".post-box");
      const btnSalvar = container.querySelectorAll("#btn-salvar");
      btnSalvar.forEach(element => {
        element.addEventListener("click", (event) => {
          event.preventDefault();
          btnEdit.classList.remove("hide"); // Mostra o botão editar
          element.classList.add("hide"); // Oculta o botão salvar
          editPost(element.dataset.edit, texto.value);
        });
      })
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
    };

    const comentEvent = () => {
      const bntComent = container.querySelectorAll('#btn-comentar');
      const comentario = container.querySelector('#post-coment');
      bntComent.forEach(element => {
        comentario.innerHTML = '';
        element.addEventListener('click', (event) => {
          event.preventDefault();
          console.log('clicou');
          console.log(event.target.dataset.comentar);
          const containerComent = document.createElement('div');
        comentario.innerHTML = `
    <textarea id='post-text-coment' class="textarea-style">Comente aqui</textarea>
    <button class='feed-bttn' id='btnn-coment' >Comentar</button>
    
  <section class='newpost-container'>
  <div class='li-posted' id='new-coment'></div>
  </section>`;
    comentario.appendChild(containerComent);
    
  });
  });
     
  const btnnComent = containerComent.querySelector('#btnn-coment');
  console.log(btnnComent);
  //const coment = containerDivNova.querySelector('#post-text-coment');
      btnnComent.addEventListener("click", (event) => {
        event.preventDefault();
       // coment.innerHTML = "";
        console.log('eita porra');
        /*creatNewComent(coment.value);
        coment.value = "";*/
      });

    //template para comentar post

    const newCont = containerDivNova.querySelector('#new-coment');
    const comentTemplate = (array) => {
      newCont.innerHTML = '';
    const containerComent = document.createElement('div');
    newCont.innerHTML = array.map( post => 
    `<section class='posted-area'>
    <h1>${post.user}</h1>
    <span>${post.date}</span>
    <span>${post.time}</span>
    <textarea class='post-box'>${post.text}</textarea>
    <div class='btn-area-posted'> 
    <button class='feed-bttn' id='like-btn-coment' data-like ='${post.idDoc}'><i class="fas fa-glass-cheers"> </i></button> 
    <p id='numbers-like-coment'>${post.like}<p>
    <button class='feed-bttn' id='deletar-coment'  data-delete = '${post.idDoc}'><i class="far fa-trash-alt"></i></button>
    <button class='feed-bttn' id='editar-coment' data-edit = '${post.idDoc}'><i class="fas fa-edit"></i></button>
    </div></section><br>`).join('');
    newCont.appendChild(containerComent);
    };
    
 
  readComent(comentTemplate);  };
     /* });
    });
  };*/
  //readComent(comentTemplate);
    likeEvent();
    deletEvent();
    editEvent();
    saveEditedEvent();
    comentEvent();
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
      
      })
      .catch(() => { });
  });

  return container;
};
