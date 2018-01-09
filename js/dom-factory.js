const createElementFromTemplate = (stringTemplate) => {
  const template = document.createElement(`template`);
  template.innerHTML = stringTemplate;
  return template.content.cloneNode(true);
};

export default createElementFromTemplate;
