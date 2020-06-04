export const loginAuth = (email,password) => {
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => console.log("deu certo"))
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            alert("E-mail ou senha inválidos. Verique o e-mail e senha e tente novamente.")// ...
        });       
}

