import { authLogin1 } from './data.js';

export const login1Auth = () => {
  const container = document.createElement('div');

  const template = `
    <h1 class='logo'></h1>
    <div class='menu'>
    <h1 class='bv'>Você se cadastrou com sucesso.</br>
    Faça seu login para entrar.</h1>
    <form>
    <div>
    <input class='input margin' type='email' id='e-mail' placeholder='Email'> 
    </div>
    <div>
    <input class='margin input' type='password' id='password' placeholder='Password'> 
    <img id='olho' class='image olho' src='imagens/olho.png'>
    </div>
    <a class='login input margin' id='login1'href='/#home'>Login<a/>
    </form>
    </div>
  `;

  container.innerHTML = template;
  const btnCadastro = container.querySelector('#login1');

  btnCadastro.addEventListener('click', () => {
    const email = container.querySelector('#e-mail').value;
    const password = container.querySelector('#password').value;
    const logAuth = (authLogin1(email, password));
    authLogin1(logAuth);
  });

  const btn = container.querySelector('#olho');

  btn.addEventListener('click', function () {
    const input = container.querySelector('#password');

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });


  return container;
};
