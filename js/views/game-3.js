import createElementFromTemplate from './../dom-factory';
import showScreen from '../show-screen';
import createGreetingScreen from './greeting';
import createStatsScreen from './stats';
import createHeaderMarkup from './header';
import createFooterMarkup from './footer';

const createGame3Screen = () => {
  const game3Element = createElementFromTemplate(`
${createHeaderMarkup({})}
<div class="game">
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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

  const gameContentForm = game3Element.querySelector(`.game__content`);

  gameContentForm.addEventListener(`click`, (evt) => {
    let currentTarget = evt.target;
    while (currentTarget !== gameContentForm) {
      if (currentTarget.classList && currentTarget.classList.contains(`game__option`)) {
        showScreen(createStatsScreen());
        break;
      }
      currentTarget = currentTarget.parentNode;
    }
  });

  game3Element.querySelector(`.header__back`).addEventListener(`click`, () => {
    showScreen(createGreetingScreen());
  });

  return game3Element;
};

export default createGame3Screen;
