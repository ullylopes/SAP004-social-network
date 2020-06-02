//template da página de cadastro do site

export default () => {
    const container = document.createElement('div');
 
    const template = `
    <button id="return" class="login input margin"><a href="/#login">Retornar a página de login</a></button>
    <h2 class="text">Cadastre-se!</h2>
    <div class="margin">
      <input class="input margin" type="email" id="e-mail-cad" placeholder="Email"> 
      <input class="input margin" type="password" id="password-cad" placeholder="Password"> 
      <a href="/#login">Cadastrar
    </div>`;
 
    container.innerHTML= template;
    return container;
 }