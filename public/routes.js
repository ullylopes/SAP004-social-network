import {authCad} from './pages/cadastro/cadastro.js';
import {loginAuth} from './pages/login/login.js';
import {login1Auth} from './pages/login1/login1.js';
import {home} from './pages/home/main.js';  

export default {
    home:home(), 
    cadastro: authCad(),
    login: loginAuth(),
    login1:login1Auth(), 
}