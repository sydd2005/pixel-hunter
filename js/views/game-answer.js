import {IMAGE_TYPE} from '../data/dictionaries';

const generateGameAnswerMarkup = (answerData, questionNumber) => {
  const answerMarkup = `
<label class="game__answer game__answer--${answerData.value}">
  <input name="question${questionNumber}" type="radio" value="${answerData.value}">
  <span>${IMAGE_TYPE[answerData.value]}</span>
</label>
`;

  return answerMarkup;
};

export default generateGameAnswerMarkup;
