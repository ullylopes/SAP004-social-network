import { firebaseLogin } from "./data.js";

export const authLogin = () => {
  const container = document.createElement("div");

  const template = `
    <section class='page-login'>
    <header><h1 class='logo'></h1></header>
    <form class='content-login'>
    <p class='welcome'>Encontre amigos para o seu happy hour e compartilhe seus bares favoritos</p>
      <ul>
      <li>
      <input type='email' class='input' id='e-mail' placeholder='Email'>
      </li>
      <li>
      <input type='password' class='input' id='password' placeholder='Senha'>
      
      </li>
      <li> 
      <a class='login-bttn' id='login' href='/#home'>Entrar<a/> 
      </li>
      </ul>    
   <br><h3>Ou conecte-se com</h3></br>
    <img class='icons' id='google' src='imagens/go.png'>
    <p> Você ainda não é cadastrado?
    Cadastre-se <a href='/#cadastro'>aqui!</a>
    </p>
    </form>
    </section>`;

  container.innerHTML = template;

  const loginButton = container.querySelector("#login");

  loginButton.addEventListener("click", () => {
    const registeredEmail = container.querySelector("#e-mail").value;
    const registeredPassword = container.querySelector("#password").value;
    const authentication = firebaseLogin(registeredEmail, registeredPassword);
    firebaseLogin(authentication);
  });

  /* return container; }; */

  const btnGoogle = container.querySelector("#google");
  btnGoogle.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function (result) {
        /* This gives you a Google Access Token. You can use it to access the Google API.*/
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
      });
  });
  /* const btnFace = container.querySelector('#facebook');
        btnFace.addEventListener('click',()=>{
        implementation ='com.google.firebase:firebase-auth:19.1.0'
        https://social-network-lab1.firebaseapp.com/__/auth/handler */

  return container;
};

{
  /* <img class='image' id='facebook'  src='imagens/fa.png'></img> */
}
