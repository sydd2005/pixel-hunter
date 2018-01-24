import createElementFromTemplate from './../dom-factory';
import showScreen from '../show-screen';
import createGreetingScreen from './greeting';
import createGame3Screen from './game-3';
import generateGameMarkup from './game';
import gameSessionData from '../data/data';

const createGame2Screen = (gameData) => {
  const game2Element = createElementFromTemplate(generateGameMarkup(gameData));

  const gameContentForm = game2Element.querySelector(`.game__content`);

  gameContentForm.addEventListener(`click`, (evt) => {
    let currentTarget = evt.target;
    while (currentTarget !== gameContentForm) {
      if (currentTarget.classList && currentTarget.classList.contains(`game__answer`)) {
        showScreen(createGame3Screen(gameSessionData.game3Step));
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
