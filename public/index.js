// Este é o ponto de entrada de sua aplicação
/* import cadastro from './pages/cadastro.js';
import login from './pages/login.js'; */
import routs from "./routs.js"

const main = document.querySelector('#root');

const init =() => {
    window.addEventListener("hashchange", () => {
        main.innerHTML= " ";
        switch(window.location.hash){
            case " ":
              main.appendChild(routs["login"]);
              break;
            case "#cadastro":
                main.appendChild(routs["cadastro"]);
                break;
            default:
                main.appendChild(routs["login"]);
        }
    })
}
window.addEventListener("load", () => {
    main.appendChild(routs["login"]);
    init();

} )

