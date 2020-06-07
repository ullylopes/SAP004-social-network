

export const firebaseRegistration = (registeredEmail, registeredPassword) => {
  firebase.auth().createUserWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => /*console.log('deu certo'))*/
    .catch(function (error) {
      // Handle Errors here.
     /* var errorCode = error.code;
      var errorMessage = error.message;
      console.log('deu ruim');*/
    });
}
