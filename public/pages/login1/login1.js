import {authLogin1} from './data.js'

export const login1 = () => {
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
    return container;

const registerButton = container.querySelector('#login1')
registerButton.addEventListener('click', () => {
  const registeredEmail = container.querySelector('#e-mail').value
  const registeredPassword = container.querySelector('#password').value
  const authentication = (authLogin1(registeredEmail,registeredPassword))
  authLogin1(authentication)
}) 
 }