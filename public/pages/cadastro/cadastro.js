import { firebaseRegistration } from './data.js';

export const authRegistration = () => {
    const container = document.createElement('div');
    const template = `
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
    <div class='register-page-bttns' >
    <li>  
     <br><a class='login input register-bttn' id='cadastro' href='#/login'>Cadastrar</a></br>
    </li>
    <li>
   <a class='input return-bttn' href='/#login'>Voltar<a/>
    </li>
    </div>
    </ul>
     </form>
     <div id='teste13'>
      </div>`;
  const template2 = ` 
      <div class ='teste1' >
        <p id='escrita'>Você se cadastrou com sucesso!!</p>
        <div  id='irParaLogin'>
          <a href ='/#home'>Entre!</a>
        </div>
      </div>
      </div>
      </div>
      `;
  container.innerHTML = template;
  const registerButton = container.querySelector('#cadastro');
  registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    const registeredEmail = container.querySelector('#email-cad').value;
    const registeredPassword = container.querySelector('#password-cad').value;
    const confirmPassword = container.querySelector('#password-cad-confirm').value
    if (registeredPassword === confirmPassword && registeredPassword != '') {
      const authentication = (firebaseRegistration(registeredEmail, registeredPassword));
      container.innerHTML = template2;
      firebaseRegistration(authentication);
    } else {
      container.querySelector('#teste13').innerHTML = `
                <div id=''>
                  <p id ='teste10' class='register-error'> Ops! Algo deu errado. <br> Tente novamente.</p>
                </div>`;
    }
  });
  return container;
};
