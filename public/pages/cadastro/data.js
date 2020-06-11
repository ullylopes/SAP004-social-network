

export const firebaseRegistration = (registerEmail, registerPassword, certo, errado) => {
  firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword)
  .then(() => certo())
  .catch(() => errado()),
};
