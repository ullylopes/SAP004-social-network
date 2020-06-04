
 import {authLogin1} from './data.js'

export const login1Auth = () => {
    const container = document.createElement('div');
 
    const template = `
    <h1 class="logo"></h1>
    <div class="menu">
    <h1 class="bv">Você se cadastrou com sucesso.</br>
    Faça seu login para entrar.</h1>
      <input class="input margin" type="email" id="e-mail" placeholder="Email"> 
      <input class="input margin" type="password" id="password" placeholder="Password"> 
      <a class="login input margin" id="login1"href="/#home">Login<a/>
    </div>
    `
  ;
 
    container.innerHTML= template;
    const btnCadastro = container.querySelector('#login1'); 

    btnCadastro.addEventListener('click', () => {
    const email = container.querySelector('#e-mail').value; 
    const password = container.querySelector('#password').value; 
    const login1Auth = (authLogin1(email,password)); 
    authLogin1(login1Auth); 
    });  

  return container;
}