import showScreen from '../show-screen';
import {createGameScreen, createNextStepState} from '../views/game';
import createStatsScreen from '../views/stats';

const showNextScreen = (state) => {
  const nextStepState = createNextStepState(state);
  const nextGameScreen = nextStepState.currentStepIndex !== state.currentStepIndex
    ? createGameScreen(nextStepState)
    : createStatsScreen();
  showScreen(nextGameScreen);
};

export const GAME_TYPES = {
  'single': {
    'modifier': `game__content--wide`,
    'task': `Угадай, фото или рисунок?`,
    'optionsCount': 1,
    'imageWidth': 705,
    'imageHeight': 455,
    'hasAnswers': true,
    'eventListenerGenerators': [
      {
        'eventType': `click`,
        'generateListener': (state, elementToListen) => {
          const eventHandler = (evt) => {
            let currentTarget = evt.target;
            while (currentTarget !== elementToListen) {
              if (currentTarget.classList && currentTarget.classList.contains(`game__answer`)) {
                showNextScreen(state);
                break;
              }
              currentTarget = currentTarget.parentNode;
            }
          };
          return eventHandler;
        }
      }
    ]
  },
  'double': {
    'modifier': ``,
    'task': `Угадайте для каждого изображения фото или рисунок?`,
    'optionsCount': 2,
    'imageWidth': 468,
    'imageHeight': 458,
    'hasAnswers': true,
    'eventListenerGenerators': [
      {
        'eventType': `change`,
        'generateListener': (state, elementToListen) => {
          const eventHandler = () => {
            const question1Checked = elementToListen.querySelector(`[name=question1]:checked`) !== null;
            const question2Checked = elementToListen.querySelector(`[name=question2]:checked`) !== null;
            if (question1Checked && question2Checked) {
              showNextScreen(state);
            }
          };
          return eventHandler;
        }
      }
    ]
  },
  'triple': {
    'modifier': `game__content--triple`,
    'task': `Найдите рисунок среди изображений`,
    'optionsCount': 3,
    'imageWidth': 304,
    'imageHeight': 455,
    'hasAnswers': false,
    'eventListenerGenerators': [
      {
        'eventType': `click`,
        'generateListener': (state, elementToListen) => {
          const eventHandler = (evt) => {
            let currentTarget = evt.target;
            while (currentTarget !== elementToListen) {
              if (currentTarget.classList && currentTarget.classList.contains(`game__option`)) {
                showNextScreen(state);
                break;
              }
              currentTarget = currentTarget.parentNode;
            }
          };
          return eventHandler;
        }
      }
    ]
  }
};

export const RESULT_MODIFIER = {
  'UNKNOWN': `unknown`,
  'WRONG': `wrong`,
  'CORRECT': `correct`,
  'FAST': `fast`,
  'SLOW': `slow`,
};

export const MAX_LIVES = 3;
