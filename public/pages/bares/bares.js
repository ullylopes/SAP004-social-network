
export const pub = () => {
  const container = document.createElement('div');
  const template = `
<header>
<h1>Página em construção</h1>
</header>
<nav><a href='/#home'>voltar<a/></nav>
`;
  container.innerHTML = template;

  return container;
};
