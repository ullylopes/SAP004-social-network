import { firebaseRegistration } from './data.js';

export const authRegistration = () => {
  const container = document.createElement('div');
  container.className = 'container-div';
  const template = `
  <section class='register-container'>
    <h2 class='welcome'>Cadastre-se!</h2>
    <form>
    <ul>
    <li>
      <input class='input' type='' id='nome-usuario' placeholder='Nome do usuário'> 
    </li>
    <li>  
      <input class='input ' type='email' id='email-cad' placeholder='Email'> 
    </li>
    <li>  
      <input class='input' type='password' id='password-cad' placeholder='Senha'>
    </li>
    <li>
      <input class='input' type='password' id='password-cad-confirm' placeholder='Confirme sua senha'> 
    </li>
    </ul>
    </form>
    <section>

    <section class='register-page-bttns'>
    <form>
    <ul>
    <li>  
    <a class='login input register-bttn' id='cadastro' href='#/login'>Cadastrar</a>
    </li>
    <li>
    <a class='input return-bttn' href='/#login'>Voltar<a/>
    </li>
    </ul>
    </form>
    </section>
    

    </ul>
    <section>
     <div id='teste13'>
      </div>
    </section>`;
  const templateSucess = ` 
      <div class ='teste1' >
        <p id='escrita'>Você se cadastrou com sucesso!!</p>
        <div  id='irParaLogin'>
          <a href ='/#home'>Entre!</a>
        </div>
      </div>
      </div>`;
  const templateFail = `        
      <div id='teste10'>
      <p> Ops! </p>
        <p id=''> Algo deu errado, <br>verifique se os campos estão preenchidos corretamente.<br>
         </p>
      </div>`;

  container.innerHTML = template;

  const registerButton = container.querySelector('#cadastro');
  const registerEmail = container.querySelector('#email-cad');
  const registerPassword = container.querySelector('#password-cad');
  const confirmPassword = container.querySelector('#password-cad-confirm');
  const userName = container.querySelector('#nome-usuario');

  registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    const sucess = () => { container.innerHTML = templateSucess; };
    const fail = (errorFirebase) => { container.querySelector('#teste13').innerHTML = errorFirebase; };
    if (registerPassword.value === confirmPassword.value && confirmPassword.value !== '' && userName.value !== '') {
      const authentication = (firebaseRegistration(registerEmail.value, registerPassword.value, sucess, fail, userName.value));
      firebaseRegistration(authentication);
    } else {
      container.querySelector('#teste13').innerHTML = templateFail;
    }
  });
  return container;
};
