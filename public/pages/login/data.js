
export const firebaseLogin = (registeredEmail, registeredPassword, certo, errado) => {
  firebase.auth().signInWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => certo())
    .catch(() => errado());
} ;
