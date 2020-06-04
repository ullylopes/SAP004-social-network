/*VAMO ARRUMAR ESSA BAGAÇA*/
import { firebaseRegistration } from "./data.js";

export const authRegistration = () => {
    const container = document.createElement("div");
 
    const template = `
    <a href="/#login">voltar<a/>
    <h2 class="bv">Cadastre-se!</h2>
    <div class="menu">
      <input class="input margin" type="email" id="registered-email" placeholder="Email"> 
      <input class="input margin" type="password" id="registered-password" placeholder="Senha"> 
      <a class="login margin" id="register" href="/#login">Cadastrar<a/>
    </div>`;
 
    container.innerHTML= template;
   
  const registerButton = container.querySelector("#register");

  registerButton.addEventListener("click", () => {
    const registeredEmail = container.querySelector("#registered-email").value;
    const registeredPassword = container.querySelector("#registered-password").value;
    const authentication = (firebaseRegistration(registeredEmail, registeredPassword));
    firebaseRegistration(authentication);

  });

  return container;
}