
export const pub = () => {
  const container = document.createElement('div');
  const template = `
  <div>
<header >
<h1>Página em construção</h1>
</header>
<nav><a href='/#home'>voltar<a/></nav>
</div>
`;
  container.innerHTML = template;

  return container;
};
