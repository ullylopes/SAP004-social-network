export const firebaseRegistration = (registeredEmail, registeredPassword, route, printError, userName) => {
  firebase.auth().createUserWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: `${userName}`,
      }).then(() => {
        console.log('Update successful');
      }).catch(() => {
        console.log('Update fail');
      });
      route();
    })
    .catch((error) => {
      const errorCode = error.message;
      printError(errorCode);
    });
};
;