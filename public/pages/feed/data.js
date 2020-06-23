export const createPost = (textPost) => {
  firebase.firestore().collection('allPost').add({
    text: textPost,
    like:0,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    id: firebase.auth().currentUser.uid,
    user: firebase.auth().currentUser.displayName,
  })
    .then((docRef) => {
      console.log(" Document written with ID id do id: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export const readPosts = (callback) => {
  firebase
    .firestore()
    .collection("allPost")
    .orderBy("time", "desc")
    .onSnapshot((querySnapshot) => {
      const user = firebase.auth().currentUser;
      user.providerData.forEach((profile) => {
        const posts = [];
        const nomes = profile.displayName;
        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), idDoc: doc.id });
          console.log(doc.data());
        });
        callback(posts, nomes);
      });
    });
};

export const editPost = (IDdopost, parametro) => {
  const db = firebase.firestore();
  db.collection("allPost").doc(IDdopost).update({
    text: parametro,
  });
  };


export const deletePost = (IDdoallPost) => {
 
  firebase.firestore().collection('allPost').doc(IDdoallPost).delete()
  .then(function() {
}).catch(function(error) {
});
}; 

export const likePost = (IDdoallPost)=>{
firebase.firestore().collection('allPost').doc(IDdoallPost).get()
.then((snap) => {
  const likeCount = snap.data().like + 1;
  firebase.firestore().collection('allPost').doc(IDdoallPost).update({
    like: likeCount,
  });
  likeBttn.innerText = likeCount;
});
}


/*export const creatNewComent = (textPost,IDdoallPost) => {
  firebase.firestore().collection('allPost').doc(IDdoallPost)
  .collection("comentario").add({
    text: textPost,
    like:0,
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
export const readComent = (callback) => {
  firebase.firestore().collection('allPost').doc()
  .collection("comentario")
.onSnapshot((querySnapshot) => {
  let user = firebase.auth().currentUser; 
   user.providerData.forEach((profile) => {
    console.log(profile.displayName);
      const posts = [];
      const nomes = profile.displayName;
       querySnapshot.forEach((doc) => {
        posts.push({...doc.data(), idDoc: doc.id});
        console.log(doc.data());
      });
      callback(posts, nomes);
    });
    });
  };*/
