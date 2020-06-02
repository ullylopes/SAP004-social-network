import routs from "./routs.js"

const main = document.querySelector('#root');

const init =() => {
    window.addEventListener("hashchange", () => {
        renderpage();
    })
}
const renderpage = ()=>{
    main.innerHTML= " ";
    const page = validacao(window.location.hash)
    main.appendChild(routs[page])   
}

const validacao = (hash) => {
    if (hash === "") {
     return "login";
    } else {
        return hash.replace("#","");
    } 
}

window.addEventListener("load", () => {
    renderpage();
    init();

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
})