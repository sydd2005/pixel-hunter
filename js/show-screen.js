const showScreen = (screenElement) => {
  const placeholder = document.querySelector(`main.central`);
  placeholder.innerHTML = ``;
  placeholder.appendChild(screenElement);
};

export default showScreen;
