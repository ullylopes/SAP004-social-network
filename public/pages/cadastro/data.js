
export const firebaseRegistration = (registeredEmail, registeredPassword, certo, errado) => {
  firebase.auth().createUserWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => certo())
    .catch(() => errado());
};
//AAAAA MANO Q ISSO 