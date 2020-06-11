import { firebaseRegistration } from './data.js';

export const authRegistration = () => {
  const container = document.createElement('div');
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
      </div>
      </section>`;
  const template2 = ` 
      <div class ='teste1' >
        <p id='escrita'>Você se cadastrou com sucesso!!</p>
        <div  id='irParaLogin'>
          <a href ='/#home'>Entre!</a>
        </div>
      </div>
      </div>`;
  const template3 = `
      <div id='teste10'>
      <p> Ops! </p>
        <p id=''> Algo deu errado.<br><br> 
         </p>
      </div>`;
  const template4 = `        
      <div id='teste10'>
      <p> Ops! </p>
        <p id=''> Algo deu errado, <br>verifique se as senhas conferem.<br> 
         </p>
      </div>`;

  container.innerHTML = template;

  const registerButton = container.querySelector('#cadastro');

  registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    const registerEmail = container.querySelector('#email-cad').value;
    const registerPassword = container.querySelector('#password-cad').value;
    const confirmPassword = container.querySelector('#password-cad-confirm').value;
    const userName = container.querySelector('#nome-usuario').value;

    const sucess = () => {
      container.innerHTML = template2;
    };
    const fail = () => {
      container.querySelector('#teste13').innerHTML = template3;
    };

    if (registerPassword === confirmPassword && confirmPassword !== '' && userName !== '') {
      const authentication = (firebaseRegistration(registerEmail, registerPassword, sucess, fail));
      firebaseRegistration(authentication);
    } else {
      container.querySelector('#teste13').innerHTML = template4;
    }
  });
  return container;
};
