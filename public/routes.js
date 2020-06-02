import login from './pages/login/login.js';
import cadastro from './pages/cadastro/cadastro.js';

/*objeto que organiza quais são nossas paginas e
 quais funções executar qdn a pagina for chamada */

export default {
    login: login(),
    cadastro: cadastro(),   
}