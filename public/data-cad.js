let emailCad = document.getElementById("email-cad").value;
 let passwordCad = document.getElementById("password-cad").value;

document.getElementById("cadastro").addEventListener("click",()=>{
    console.log("clicou")
  })
  
  firebase.auth().signInWithEmailAndPassword(emailCad, passwordCad)
  .then(()=> console.log("deu certo"))
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim")// ...
  });
  email-password.html;