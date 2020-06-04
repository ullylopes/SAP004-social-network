import {authRegistration} from './pages/cadastro/cadastro.js';
import {loginPage} from './pages/login/login.js';
import {login1} from './pages/login1/login1.js';
import {home} from './pages/home/main.js';  

export default {
    home:home(), 
    cadastro: authRegistration(),
    login: loginPage(),
    login1: login1(),
}