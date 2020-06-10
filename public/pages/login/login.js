import { firebaseLogin } from './data.js';

export const authLogin = () => {
  const container = document.createElement('div');

  const template = `
  <div >
    <header>
    <h1 class='logo'></h1>
    </header>
    <p class='welcome font'>Bem Vindx!</p>
    <form>
      <ul>
      <li>
      <input type='email' class='input margin font' id='e-mail' placeholder='Email'> 
      </li>
      <li>
      <input type='password' class='input margin font' id='password' placeholder='Senha'> 
      </li>
      <li> 
      <br><a class='login margin font' id='login' href='/#home'>Entrar<a/> </br>
      </li>
      </ul>
      </form>
    <footer class='font'>
    <h3>Ou conecte-se com</h3>
    <br><img class='image' id='google' src='imagens/go.png'></br>
    <br><p> Você ainda não é cadastrado? </br>
    Cadastre-se <a href='/#cadastro'>aqui!</a>
    </p>
   </footer>
   </div>
  `;

  container.innerHTML = template;

  const loginButton = container.querySelector('#login');

  loginButton.addEventListener('click', () => {
    const registeredEmail = container.querySelector('#e-mail').value;
    const registeredPassword = container.querySelector('#password').value;
    const authentication = firebaseLogin(registeredEmail, registeredPassword);
    firebaseLogin(authentication);
  });


  const btnGoogle = container.querySelector('#google');
  btnGoogle.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then((/* result */) => {
        //  const token = result.credential.accessToken;
        //  const user = result.user;
      })
      .catch((/* error */) => {
        //  const errorCode = error.code;
        //  const errorMessage = error.message;
        //  const email = error.email;
        //  const credential = error.credential;
      });
  });
  return container;
};
