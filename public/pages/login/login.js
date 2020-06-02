//template da pagina inicial de login

export default () => {
    const container = document.createElement('div');
 
    const template = `
    <h1 class="logo"></h1>
    <h2 class="text">Bem vindos!</h2>
    <div class="margin">
      <input class="input margin" type="email" id="e-mail" placeholder="Email"> 
      <input class="input margin" type="password" id="password" placeholder="Password"> 
      <button id="login input margin" class="login">Login</button> 
    </div>
  </header>
  <footer class="menu text">
    <h3>Ou conecte-se com</h3>
    <p>Facebook e google</p>
    <li>Você ainda não é cadastrado?Cadastre-se 
      <a href="/#cadastro">aqui!</a>
    </li>
  </footer>`;
 
  //adiciona o template a div 
    container.innerHTML= template;
    return container;
 }