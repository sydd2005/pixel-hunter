import generateGameOptionMarkup from './game-option';
import {GAME_TYPES} from '../data/dictionaries';
import generateGameStatsMarkup from './game-stats';
import generateHeaderMarkup from './header';
import generateFooterMarkup from './footer';
import createElementFromTemplate from '../dom-factory';
import showScreen from '../show-screen';
import createGreetingScreen from './greeting';

const generateGameMarkup = (state) => {
  const gameData = state.steps[state.currentStepIndex];
  const gameParams = GAME_TYPES[gameData.type];

  const optionsMarkup = gameData.options.map((option, idx) => {
    return generateGameOptionMarkup(gameParams, option, idx + 1);
  }).join(``);

  const gameMarkup = `
${generateHeaderMarkup(state)}
<div class="game">
  <p class="game__task">${gameData.task}</p>
  <form class="game__content ${gameParams.modifier}">
    ${optionsMarkup}
  </form>
  ${generateGameStatsMarkup(state)}
</div>
${generateFooterMarkup()}
`;

  return gameMarkup;
};

const getNextStepIndex = (state) => {
  let nextStepIndex = state.currentStepIndex + 1;
  const lastStepIndex = state.steps.length - 1;
  nextStepIndex = nextStepIndex < lastStepIndex ? nextStepIndex : lastStepIndex;
  return nextStepIndex;
};

export const createNextStepState = (state) => {
  return Object.assign({}, state, {
    'currentStepIndex': getNextStepIndex(state)
  });
};

export const createGameScreen = (state) => {
  const currentStep = state.steps[state.currentStepIndex];
  const currentStepType = currentStep.type;
  const gameElement = createElementFromTemplate(generateGameMarkup(state));

  const gameContentForm = gameElement.querySelector(`.game__content`);

  GAME_TYPES[currentStepType].eventListenerGenerators.forEach((item) => {
    gameContentForm.addEventListener(item.eventType, item.generateListener(state, gameContentForm));
  });

  gameElement.querySelector(`.header__back`).addEventListener(`click`, () => {
    showScreen(createGreetingScreen());
  });

  return gameElement;
};

export default generateGameMarkup;
