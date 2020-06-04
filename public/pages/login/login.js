export const loginPage =  () => {
    const container = document.createElement('div');
 
    const template = `
    <h1 class="logo"></h1>
  <h2 class="bv">Bem Vindx!</h2>
  <h3 id="teste40"><h3>
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
    return container;
 }