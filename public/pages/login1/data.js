
export const authLogin1 = (registeredEmail,registeredPassword) =>{
    firebase.auth().signInWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => console.log("deu certo"))
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log("deu ruim")
    console.log(errorMessage)
  })
}