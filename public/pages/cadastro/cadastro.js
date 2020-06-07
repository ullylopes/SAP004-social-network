import { firebaseRegistration } from './data.js';

export const authRegistration = () => {
    const container = document.createElement('div');
    const template = `
    <a href='/#login'>voltar<a/>
    <h2 class='bv'>Cadastre-se!</h2>
    <div class='menu'>
      <input class='input margin' type='' id='nome-usuario' placeholder='Nome de usuário'> 
      <input class='input margin' type='email' id='email-cad' placeholder='Email'> 
      <input class='input margin' type='password' id='password-cad' placeholder='Password'>
      <input class='input margin' type='password' id='password-cad-confirm' placeholder=' Confime o password'> 
      <button class='login margin' id='cadastro'>Cadastro</button>
      <div id='teste13'>
      </div>`;
    const template2 =  ` 
      <div class ='teste1' >
        <p id='escrita'>Você se cadastrou com sucesso!!</p>
        <div  id='irParaLogin'>
          <a href ='/#home'>Entre!</a>
        </div>
      </div>
      </div>`

    container.innerHTML= template;
        const registerButton = container.querySelector('#cadastro')
        registerButton.addEventListener('click', (event) => {
          event.preventDefault()
          const registeredEmail = container.querySelector('#email-cad').value
          const registeredPassword = container.querySelector('#password-cad').value
          const confirmPassword = container.querySelector('#password-cad-confirm').value
            if (registeredPassword === confirmPassword  && registeredPassword != ''){
              const authentication = (firebaseRegistration(registeredEmail,registeredPassword))
              container.innerHTML = template2
              firebaseRegistration(authentication)
            }else{     
              container.querySelector('#teste13').innerHTML=     `
                <div id=''>
                  <p id = 'teste10'> Ops! Algo deu errado. <br> tente novamente</p>
                </div>`;
        }
          })
      
      return container;

}