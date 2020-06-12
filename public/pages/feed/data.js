// Aqui serão exportadas as funções que irão ser usadas

/* export const greeting = name => `Oi ${name}! Que bom ver você aqui!`; */
// export const identificacao = nome => `${nome}`;
// export const mensagem = post => ` ${post}`;

export const createPost = (text) => {
  firebase.firestore().collection('post').add({
    text: text,
    nome: 'Adélia',
  })
    .then((docRef) => {
	console.log(' Document written with ID: ', docRef.id);
    })
	.catch(function(error) {
	console.error('Error adding document: ', error);
	}); 
  }

  export const readPosts = (callback) => {
    firebase.firestore().collection('post')
      .onSnapshot(function(querySnapshot) {
          var posts = [];
          querySnapshot.forEach(function(doc) {
              posts.push(doc.data());
              console.log(doc.data());
          });
          callback(posts)
      });
  }


  /* export const createLike = (numero) => {
    firebase.firestore().collection('like').add({
      numero: 0,
      
    })
      .then((docRef) => {
    console.log(' Document written with ID: ', docRef.id);
      })
    .catch(function(error) {
    console.error('Error adding document: ', error);
    }); 
    } */