  import { cadastrando } from './data.js'; 

    export const authCad = () => {
    const container = document.createElement('div');
    const template = `
    <a href="/#login">voltar<a/>
    <h2 class="bv">Cadastre-se!</h2>
    <div class="menu">
      <input class="input margin" type="email" id="email-cad" placeholder="Email"> 
      <input class="input margin" type="password" id="password-cad" placeholder="Password"> 
      <a class="login margin" id="cadastro"href="/#login1">Cadastro</a>
    </div>`;

    container.innerHTML= template; 
    

  const btnCadastro = container.querySelector('#cadastro'); 

    btnCadastro.addEventListener('click', () => {
    const emailCad = container.querySelector('#email-cad').value; 
    const passwordCad = container.querySelector('#password-cad').value; 
    const cadastroAuth = (cadastrando(emailCad,passwordCad)); 
    cadastrando(cadastroAuth); 
    });  

    return container; 
}