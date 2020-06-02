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

} )

