// Aqui serão exportadas as funções que irão ser usadas

/* export const greeting = name => `Oi ${name}! Que bom ver você aqui!`; */
// export const identificacao = nome => `${nome}`;
// export const mensagem = post => ` ${post}`;

export const createPost = (text) => {
  firebase.firestore().collection('post').add({
    text: text,
    nome: 'Adélia',
	})
    .then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	}); 
  }
