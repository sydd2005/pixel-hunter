import createElementFromTemplate from './../dom-factory';
import showScreen from '../show-screen';
import createGreetingScreen from './greeting';
import createStatsScreen from './stats';
import generateGameMarkup from './game';

const createGame3Screen = (gameData) => {
  const game3Element = createElementFromTemplate(generateGameMarkup(gameData));

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
