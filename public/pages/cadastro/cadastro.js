import { cadastrando } from './data.js';

export const authCad = () => {
  const container = document.createElement('div');
  const template = `
    <a href="/#login">voltar<a/>
    <h2 class="bv">Cadastre-se!</h2>
    <div class="menu">
      <input class="input margin" type="email" id="email-cad" placeholder="Email"> 
      <input class="input margin" type="password" id="password-cad" placeholder="Password"> 
      <img id="olho" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVQ4jd2SvW3DMBBGbwQVKlyo4BGC4FKFS4+TATKCNxAggkeoSpHSRQbwAB7AA7hQoUKFLH6E2qQQHfgHdpo0yQHX8T3exyPR/ytlQ8kOhgV7FvSx9+xglA3lM3DBgh0LPn/onbJhcQ0bv2SHlgVgQa/suFHVkCg7bm5gzB2OyvjlDFdDcoa19etZMN8Qp7oUDPEM2KFV1ZAQO2zPMBERO7Ra4JQNpRa4K4FDS0R0IdneCbQLb4/zh/c7QdH4NL40tPXrovFpjHQr6PJ6yr5hQV80PiUiIm1OKxZ0LICS8TWvpyyOf2DBQQtcXk8Zi3+JcKfNafVsjZ0WfGgJlZZQxZjdwzX+ykf6u/UF0Fwo5Apfcq8AAAAASUVORK5CYII="
/>
      <a class="login margin" id="cadastro"href="/#login">Cadastrar</a>
    </div>`;

  container.innerHTML = template;


  const btnCadastro = container.querySelector('#cadastro');

  btnCadastro.addEventListener('click', () => {
    const emailCad = container.querySelector('#email-cad').value;
    const passwordCad = container.querySelector('#password-cad').value;
    const cadastroAuth = (cadastrando(emailCad, passwordCad));
    cadastrando(cadastroAuth);
  });

  /* const btnCadastro1 = container.querySelector('#cadastro1'); 

  btnCadastro1.addEventListener('click', () => {
  const emailCad = container.querySelector('#email-cad').value; 
  const passwordCad = container.querySelector('#password-cad').value; 
  const cadastroAuth = (cadastrando(emailCad,passwordCad)); 
  cadastrando(cadastroAuth); 
  });   */

  return container;
}

//<a class="login margin" id="cadastro"href="/#login1">Cadastro ir para login 1</a>