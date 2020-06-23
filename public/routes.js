import { authRegistration } from './pages/cadastro/cadastro.js';
import { authLogin } from './pages/login/login.js';
import { feed } from './pages/feed/main.js';
import { table } from './pages/mesas/mesas.js';
import { pub } from './pages/bares/bares.js';
import { profile } from './pages/perfil/perfil.js';

export default {
  home: feed,
  cadastro: authRegistration,
  login: authLogin,
  mesas: table,
  bares: pub,
  perfil: profile,
};
