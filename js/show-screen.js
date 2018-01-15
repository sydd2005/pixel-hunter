import createFooterElement from './views/footer';

const showScreen = (screenElement) => {
  const placeholder = document.querySelector(`main.central`);
  placeholder.innerHTML = ``;
  placeholder.appendChild(screenElement);
  placeholder.appendChild(createFooterElement());
};

export default showScreen;
