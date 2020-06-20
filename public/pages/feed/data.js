export const createPost = (textPost) => {
  firebase.firestore().collection('allPost').add({
    text: textPost,
    like:0,
    id: firebase.auth().currentUser.uid,
    userName: firebase.auth().currentUser.displayName,
})
.then(() => {
})
.catch(() => {
});
};

export const readPosts = (callback) => {
  
  firebase.firestore().collection('allPost')
.onSnapshot((querySnapshot) => {
  let user = firebase.auth().currentUser; 
 user.providerData.forEach((profile) => {
    console.log(profile.displayName);
      const posts = [];
      const nomes = profile.displayName;
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      
      });
      callback(posts, nomes);
    });
    });
  };


/*export const deletePost = (postid) => {
  firebase.firestore().collection('post').doc().delete({
    text:postid,
  })
  .then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
 };*/



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