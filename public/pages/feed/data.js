export const createPost = (text) => {
  firebase.firestore().collection('post').add({
    text: text,
  })
    .then((docRef) => {
      console.log(' Document written with ID: ', docRef.id);
    })
	  .catch(function(error) {
      console.error('Error adding document: ', error);
    }); 
} ;

export const readPosts = (callback) => {
  firebase.firestore().collection('post')
    .onSnapshot(function(querySnapshot) {
        let posts = [];
        querySnapshot.forEach(function(doc) {
              posts.push(doc.data());
              console.log(doc.data());
          });
          callback(posts)
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
 };*/
/* export const editPost = (text)  => {
  firebase.firestore().collection('post').doc(). set ({ 
    text: true, 
  }, {merge: true} );
 };*/
