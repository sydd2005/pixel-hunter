import createElementFromTemplate from './../dom-factory';
import showScreen from '../show-screen';
import createGreetingScreen from './greeting';
import generateHeaderMarkup from './header';
import generateFooterMarkup from './footer';
import data from '../data/data';
import {createGameScreen} from './game';

const createRulesScreen = () => {
  const rulesElement = createElementFromTemplate(`
${generateHeaderMarkup()}
<div class="rules">
<h1 class="rules__title">Правила</h1>
<p class="rules__description">Угадай 10 раз для каждого изображения фото <img
  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br>
  <br>
  Готовы?
</p>
<form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя">
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>
</div>
${generateFooterMarkup()}
`);

  rulesElement.querySelector(`.header__back`).addEventListener(`click`, () => {
    showScreen(createGreetingScreen());
  });

  const continueButton = rulesElement.querySelector(`.rules__button.continue`);

  rulesElement.querySelector(`.rules__input`).addEventListener(`input`, (evt) => {
    continueButton.disabled = evt.target.value === ``;
  });

  rulesElement.querySelector(`.rules__form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    showScreen(createGameScreen(data.initialState));
  });

  return rulesElement;
};

export default createRulesScreen;
