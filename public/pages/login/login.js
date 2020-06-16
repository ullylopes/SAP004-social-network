import { firebaseLogin } from './data.js';

export const authLogin = () => {
  const container = document.createElement('div');
  container.className ='container-log';

  const template = `
    <section class='logo'> 
    <img class='img-logo'src='./imagens/logo2.png' />
    </section>
    <section class='container-form'>
    <div class='form'>
    <form>
    <p class='welcome'>Encontre amigos para o seu happy hour e compartilhe seus bares favoritos</p>
      <ul>
      <li>
      <input type='email' class='input-log' id='e-mail' placeholder='Email'>
      </li>
      <li>
      <input type='password' class='input-log' id='password' placeholder='Senha'>
      </li>
      <li> 
      <a class='login-bttn input-log' id='login'>Entrar<a/> 
      </li>
      </ul> 
      </form>
      <div class='messagem'>
      <p class='login-error' id='login-error'>
      </p> 
      </div>
      <div class='login-cad'>
    <h3>Ou conecte-se com</h3></br>
    <img class='icons' id='google' src='imagens/go.png'>
    <p> Você ainda não é cadastrado?
    Cadastre-se <a href='/#cadastro'>aqui!</a>
    </p>
</div>
</div>
    </section>`;

  container.innerHTML = template;

  const loginButton = container.querySelector('#login');
  const registeredEmail = container.querySelector('#e-mail');
  const registeredPassword = container.querySelector('#password');

  const route = () => {
    window.location.href = '/#home';
  };
const errorMessages = {
  'auth/user-not-found': 'Usuário não cadastrado.',
  'auth/wrong-password':'Senha incorreta',
  'auth/invalid-email': 'E-mail inválido',

}
  const printError = (error) => {
    document.getElementById('login-error').innerHTML = `${errorMessages[error]}`;
  };

  loginButton.addEventListener('click', () => {
    const authentication = firebaseLogin(registeredEmail.value, registeredPassword.value, route, printError);
    firebaseLogin(authentication);
  });

  const btnGoogle = container.querySelector('#google');
  btnGoogle.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log('deu certo');
        window.location.href ='/#home';
        const token = result.credential.accessToken;
        const user = result.user;
      })
      .catch(( error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorMessage);
      });
  });

  return container;
};
