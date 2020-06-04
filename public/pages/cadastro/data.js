

export const cadastrando = (emailCad, passwordCad) => {
  firebase.auth().createUserWithEmailAndPassword(emailCad, passwordCad)
    .then(() => console.log("deu certo"))
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage)
      console.log("deu erro")// ...
    });
}
