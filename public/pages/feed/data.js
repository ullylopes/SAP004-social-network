export const createPost = (textPost) => {
  firebase.firestore().collection('post').add({
    text: textPost,
    id: firebase.auth().currentUser.uid,
    user: firebase.auth().currentUser.displayName,
  })
    .then((docRef) => {
      console.log(' Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const readPosts = (callback) => {
  firebase.firestore().collection('post')
    .onSnapshot((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
        console.log(doc.data());
      });
      callback(posts);
    });
};

/* export const deletePost = (postid) => {
  firebase.firestore().collection('post').doc().delete({
    text:text,
  })
  .then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
 }; */
 export const editPost = () => {
   db.collection('post').update({
     text: 'MUDOOU',
    })
    .then(function() {
     console.log("Document successfully updated!");
    })
    .catch(function(error) {
     // The document probably doesn't exist.
     console.error("Error updating document: ", error);
    });
};

/* export const editPost = (text)  => {
  firebase.firestore().collection('post').doc(). set ({ 
    text: true, 
  }, {merge: true} );
 };*/
