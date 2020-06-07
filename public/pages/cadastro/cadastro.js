import { firebaseRegistration } from './data.js';

export const authRegistration = () => {
  const container = document.createElement('div');

  const template = `
    <nav><a href='/#login'>voltar<a/></nav>
    <h2 class='welcome font'>Cadastre-se!</h2>
    <form>
    <ul>
    <li>
      <input class='input margin font' type='' id='nome-usuario' placeholder='Nome do usuário'> 
    </li>
    <li>  
      <input class='input margin font' type='email' id='email-cad' placeholder='Email'> 
    </li>
    <li>  
      <input class='input margin font' type='password' id='password-cad' placeholder='Senha'>
    </li>
    <li>
      <input class='input margin font' type='password' id='password-cad-confirm' placeholder='Confirme sua senha'> 
    </li>
    <li>  
     <br><a class='login margin font' id='cadastro' href='#/login1'>Cadastrar</a></br>
    </li>
     </form>`;

  container.innerHTML = template;

  const registerButton = container.querySelector('#cadastro')
  registerButton.addEventListener('click', (event) => {
    event.preventDefault()
    const registeredPassword = container.querySelector('#password-cad').value
    const confirmPassword = container.querySelector('#password-cad-confirm').value
    if (registeredPassword === confirmPassword) {
      console.log('menina ta igualzinha a senha')
      const registeredEmail = container.querySelector('#email-cad').value
      const authentication = (firebaseRegistration(registeredEmail, registeredPassword))
      firebaseRegistration(authentication)
      /*             const template2 =  `  <a id='aia' href ='#login1'></a>
                                      </div>` */
      container.innerHTML = template2
    } else {
      /*             const template2 =  `  <a id='aia' href ='#login1'></a>
                                      </div>`
                  container.innerHTML = template2 */
      console.log('menina a senha ta diferente')

    }

  })
  return container;

}
