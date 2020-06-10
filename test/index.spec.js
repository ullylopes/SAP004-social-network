// importamos as funções que iremos testar
import { greeting } from '../public/pages/home/data.js';

describe('Greeting', () => {
  it('Deveria retornar "Oi Maria! Que bom ver você aqui!" quando passado "Maria" como parâmetros', () => {
    const message = 'Oi Maria! Que bom ver você aqui!';
    expect(greeting('Maria')).toEqual(message);
  });
});

/* import { firebaseLogin } from '../public/pages/login/data.js';
describe ('FirebaseLogin',() =>{
  it ('should have the correct structure',() =>{
    element.innerHTML = firebaseLogin({ title: 'Text', id: 1 });

    expect(element).toMatchSnapshot();
  });
}); */
