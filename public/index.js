import routes from "./routes.js";

const main = document.querySelector("#root");
// para acompanhar a mudança de rota que acontece na pagina
const init = () => {
  //verifica a url da localização p pegar o hash
  window.addEventListener("hashchange", () => {
    renderPage();
  })
}

//otimização pois o codigo seria usado em duas funções. 
const renderPage = () => {
  main.innerHTML = " ";
  const page = validateHash(window.location.hash);
  main.appendChild(routes[page]);
};

// função ternário substituindo if else
const validateHash = (hash) => (hash === "" ? "login" : hash.replace("#", ""));

/* toda vez que tiver um load do window, vai executar 
uma função que vai pegar o main do html 
e adicionar um filho no corpo dele  */
window.addEventListener("load", () => {
  renderPage();
  init();
});
