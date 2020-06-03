export default () => {
    const container = document.createElement('div');
 
    const template = `
    <h1 class="logo"></h1>
    <div class="menu">
    <h1 class="bv">Você se cadastrou com sucesso.</br>
    Faça seu login para entrar.</h1>
      <input class="input margin" type="email" id="e-mail" placeholder="Email"> 
      <input class="input margin" type="password" id="password" placeholder="Password"> 
      <a class="login input margin" id="login"href="/#login1">Login<a/>
    </div>
    `
  ;
 
    container.innerHTML= template;
    return container;
 }