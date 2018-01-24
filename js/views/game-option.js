const generateGameOptionMarkup = (gameParams, optionData, optionNumber) => {
  const answersMarkup = gameParams.hasAnswers ? `
<label class="game__answer game__answer--photo">
  <input name="question${optionNumber}" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer game__answer--paint">
  <input name="question${optionNumber}" type="radio" value="paint">
  <span>Рисунок</span>
</label>
` : ``;

  const optionMarkup = `
<div class="game__option">
  <img src="${optionData.src}" alt="Option ${optionNumber}" style="max-width: 100%; max-height: 100%;">
  ${answersMarkup}
</div>
`;

  return optionMarkup;
};

export default generateGameOptionMarkup;
