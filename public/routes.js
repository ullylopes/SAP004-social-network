import { authRegistration } from './pages/cadastro/cadastro.js';
import { authLogin } from './pages/login/login.js';
import { home } from './pages/feed/main.js';
import { mesas } from './pages/mesas/mesas.js';
import { pub } from './pages/bares/bares.js';
import { profile } from './pages/perfil/perfil.js';

export default {
  home: home(),
  cadastro: authRegistration(),
  login: authLogin(),
  mesas: mesas(),
  bares: pub(),
  perfil: profile(),
};
