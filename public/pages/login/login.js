export const loginAuth = () => {
    const container = document.createElement('div');
 
    const template = `
    <h1 class="logo"></h1>
  <h2 class="bv">Bem Vindx!</h2>
    <div class="menu">
      <input class="input margin" type="email" id="e-mail" placeholder="Email"> 
      <input class="input margin" type="password" id="password" placeholder="Password"> 
    <a class="login margin" id="login"href="/#home">Login<a/>  
    </div>
  <div class="color cad">
    <h3>Ou conecte-se com</h3>
    <img class="image" src="imagens/fa.png"> <img class="image" src="imagens/go.png">
    <p> Você ainda não é cadastrado? </br>
    Cadastre-se <a href="/#cadastro">aqui!</a>
    </p>
  </div>
  `
  ;
  container.innerHTML= template;

    const btnLogin = container.querySelector('#login'); 

    btnLogin.addEventListener('click', () => {
    const email = container.querySelector('#e-mail').value; 
    const password = container.querySelector('#password').value; 
    const loginoAuth = (loginAuth(email,password)); 
    loginAuth(loginAuth); 
    });  





    return container;
 }