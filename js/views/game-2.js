import createElementFromTemplate from './../dom-factory';
import showScreen from '../show-screen';
import createGreetingScreen from './greeting';
import createGame3Screen from './game-3';
import createHeaderMarkup from './header';
import createFooterMarkup from './footer';

const createGame2Screen = () => {
  const game2Element = createElementFromTemplate(`
${createHeaderMarkup({})}
<div class="game">
<p class="game__task">Угадай, фото или рисунок?</p>
<form class="game__content  game__content--wide">
  <div class="game__option">
    <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<div class="stats">
  <ul class="stats">
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--correct"></li>
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--unknown"></li>
  </ul>
</div>
</div>
${createFooterMarkup()}
`);

  const gameContentForm = game2Element.querySelector(`.game__content`);

  gameContentForm.addEventListener(`click`, (evt) => {
    let currentTarget = evt.target;
    while (currentTarget !== gameContentForm) {
      if (currentTarget.classList && currentTarget.classList.contains(`game__answer`)) {
        showScreen(createGame3Screen());
        break;
      }
      currentTarget = currentTarget.parentNode;
    }
  });

  game2Element.querySelector(`.header__back`).addEventListener(`click`, () => {
    showScreen(createGreetingScreen());
  });

  return game2Element;
};

export default createGame2Screen;
