export const firebaseRegistration = (registeredEmail, registeredPassword, route, printError, userName) => {
  firebase.auth().createUserWithEmailAndPassword(registeredEmail, registeredPassword)
    .then(() => {
      const user = firebase.auth().currentUser;
/*       firebase.firestore().collection('users').add({
        user: userName,
      })
      .then((docRef) => {
        console.log(' Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      }); */
      user.updateProfile({
        displayName: userName,
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
