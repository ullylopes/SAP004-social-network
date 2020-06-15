export const firebaseRegistration = (registeredEmail, registeredPassword, route, printError, nome) => {
  firebase.auth().createUserWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => {
      route();
    })
    .catch((error) => {
      const errorCode = error.message;
      printError(errorCode);
    });
};
export const mudar = (nome) => {
  firebase.auth().currentUser.displayName = nome;
};