// Este é o ponto de entrada de sua aplicação
import   './pages/home/main.js'; 

/* document.querySelector('#root').appendChild(home()); */
/* window.addEventListener("load,") */
document.getElementById("cadastro").addEventListener("click",()=>{
  console.log("clicou")
})

firebase.auth().signInWithEmailAndPassword(email, password)
.then(()=>HTMLFormControlsCollection.log("deu certo"))
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("deu ruim")// ...
});
email-password.html;