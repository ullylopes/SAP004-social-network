/*VAMO ARRUMAR ESSA BAGAÇA*/
import { firebaseRegistration } from "./data.js";

export const authRegistration = () => {
    const container = document.createElement("div");
 
    const template = `
    <a href="/#login">voltar<a/>
    <h2 class="bv">Cadastre-se!</h2>
    <div class="menu">
      <input class="input margin" type="" id="nome-usuario" placeholder="Nome de usuário"> 
      <input class="input margin" type="email" id="email-cad" placeholder="Email"> 
      <input class="input margin" type="password" id="password-cad" placeholder="Password">
      <input class="input margin" type="password" id="password-cad-confirm" placeholder=" Confime o password"> 
      <a class="login margin" id="cadastro" href='login1'>Cadastro</a>
    </div>`;

    container.innerHTML= template;

        const registerButton = container.querySelector('#cadastro')
        registerButton.addEventListener('click', (event) => {
          event.preventDefault()
          const registeredPassword = container.querySelector('#password-cad').value
          const confirmPassword = container.querySelector('#password-cad-confirm').value
          if (registeredPassword === confirmPassword){
            console.log("menina ta igualzinha a senha")
            const registeredEmail = container.querySelector('#email-cad').value
            const authentication = (firebaseRegistration(registeredEmail,registeredPassword))
            firebaseRegistration(authentication)
/*             const template2 =  `  <a id='aia' href ='#login1'></a>
                                </div>` */
            container.innerHTML = template2
          }else{
/*             const template2 =  `  <a id='aia' href ='#login1'></a>
                                </div>`
            container.innerHTML = template2 */
            console.log("menina a senha ta diferente")
           
      }
    
    })
    return container ;

}