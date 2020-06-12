
export const firebaseLogin = (registeredEmail, registeredPassword) => {
  firebase.auth().signInWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => { console.log('deu certo')  })
    .catch(( error ) => {
      // Handle Errors here.
      // let errorCode = error.code;
      let errorMessage = error.message;
       console.log('deu ruim');
       console.log(errorMessage);
    });
};
