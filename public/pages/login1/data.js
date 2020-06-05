export const authLogin1 = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => console.log('deu certo'))
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorMessage)
            console.log('deu ruim')// ...
        });
}
