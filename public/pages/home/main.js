// Aqui serão criados os eventos de Manipulação de DOM e templates
import { greeting } from './data.js';

export const home = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class ='post-area-container'>
    <form class='post-area'>
      <input class='text-area' id='name' type='text'>
      <div class='post-bttn-area'><button class='input post-bttn' id='greeting-btn'>Postar</button></div>
    </div>
    </form>
    
    
    <div id='greeting-message'></div>
  `;

  const name = container.querySelector('#name');
  const greetingBtn = container.querySelector('#greeting-btn');
  const greetingMessage = container.querySelector('#greeting-message');

  greetingBtn.addEventListener('click', (event) => {
    event.preventDefault();
    greetingMessage.innerHTML = greeting(name.value);
  });

  return container;
};
