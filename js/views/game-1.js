import createElementFromTemplate from './../dom-factory';
import showScreen from '../show-screen';
import createGame2Screen from './game-2';
import createGreetingScreen from './greeting';
import generateGameMarkup from './game';
import gameSessionData from '../data/data';

const createGame1Screen = (gameData) => {
  const game1Element = createElementFromTemplate(generateGameMarkup(gameData));

  const gameContentForm = game1Element.querySelector(`.game__content`);

  gameContentForm.addEventListener(`change`, () => {
    const question1Checked = gameContentForm.querySelector(`[name=question1]:checked`) !== null;
    const question2Checked = gameContentForm.querySelector(`[name=question2]:checked`) !== null;
    if (question1Checked && question2Checked) {
      showScreen(createGame2Screen(gameSessionData.game2Step));
    }
  });

  game1Element.querySelector(`.header__back`).addEventListener(`click`, () => {
    showScreen(createGreetingScreen());
  });

  return game1Element;
};

export default createGame1Screen;
