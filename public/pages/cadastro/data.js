export const firebaseRegistration = (registeredEmail, registeredPassword) => {
  firebase.auth().createUserWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => {})
    .catch(() => {
    });
};
