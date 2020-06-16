
export const pub = () => {
  const container = document.createElement('div');
  container.className ='container';
  const template = `
  <div class='carregando'>

<h1>Página em construção</h1>
<button class='return-bttn'><a href='/#home'>voltar<a/></button>
</div>
`;
  container.innerHTML = template;

  return container;
};
