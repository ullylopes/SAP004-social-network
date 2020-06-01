export default () => {
    const container = document.createElement('div');
 
    const template = `
    <h2 class="text">Cadastre-se!</h2>
    <div class="margin">
      <input class="input margin" type="email" id="e-mail-cad" placeholder="Email"> 
      <input class="input margin" type="password" id="password-cad" placeholder="Password"> 
      <button class="login input margin" id="cadastro">Cadastro</button> 
    </div>`;
 
    container.innerHTML= template;
    return container;
 }