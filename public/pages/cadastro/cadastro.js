/*VAMO ARRUMAR ESSA BAGAÇA*/
export default () => {
    const container = document.createElement('div');
 
    const template = `
    <a href="/#login">voltar<a/>
    <h2 class="bv">Cadastre-se!</h2>
    <div class="menu">
      <input class="input margin" type="email" id="email-cad" placeholder="Email"> 
      <input class="input margin" type="password" id="password-cad" placeholder="Password"> 
      <a class="login margin" id="cadastro"href="/#login1">Cadastro<a/>
    </div>`;
 
    container.innerHTML= template;
    return container;
 }

