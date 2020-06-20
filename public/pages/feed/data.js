export const createPost = (textPost) => {
  firebase.firestore().collection('post').add({
    text: textPost,
    id: firebase.auth().currentUser.uid,
    user: firebase.auth().currentUser.displayName,
  })
    .then((docRef) => {
      console.log(' Document written with ID id do id: ', docRef.id);
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
        posts.push({...doc.data(), idDoc: doc.id});
        console.log(doc.data());
      });
      callback(posts);
    });
};

export const editPost = (IDdopost) => {
  const db = firebase.firestore();
  db.collection('post').doc(IDdopost).update({
    text: 'MUDOOU',
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
