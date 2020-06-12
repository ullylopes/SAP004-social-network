export const firebaseRegistration = (registeredEmail, registeredPassword, route, printError) => {
  firebase.auth().createUserWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => {
      route();
    })
    .catch((error) => {
      const errorCode = error.message;
      printError(errorCode);
    });
};
