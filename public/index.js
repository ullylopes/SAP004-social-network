// Este é o ponto de entrada de sua aplicação
import cadastro from './pages/cadastro.js';
import login from './pages/login.js';

const main = document.querySelector('#root');

const init =() => {
    window.addEventListener("hashchange", () => {
        main.innerHTML=" "
        switch(window.location.hash){
            case " ":
              main.appendChild(login());
              break;
            case "#cadastro":
                main.appendChild(cadastro());
                break;
            default:
                main.appendChild(login())
        }
    })
}
window.addEventListener("load", () => {
    main.appendChild(login());
    init();

} )

