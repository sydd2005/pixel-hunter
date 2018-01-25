import {GAME_TYPES, RESULT_MODIFIER} from './dictionaries';

const samples = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
  ]
};

const popRandomImage = () => {
  const isPainting = Math.random() > 0.5 && samples.paintings.length > 0 || samples.photos.length === 0;
  const images = isPainting ? samples.paintings : samples.photos;
  if (images.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * images.length);
  const image = {
    src: images.splice(randomIndex, 1),
    value: isPainting ? `paint` : `photo`,
  };

  return image;
};

const generateStepData = (stepType) => {
  const gameType = GAME_TYPES[stepType];
  const gameStep = {
    type: stepType,
    task: gameType.task,
    options: [],
  };
  for (let i = 0; i < gameType.optionsCount; i++) {
    const randomImage = popRandomImage();
    const option = randomImage ? randomImage : {
      src: `http://placehold.it/${gameType.imageWidth}x${gameType.imageHeight}`,
      value: `nothing`,
    };
    gameStep.options.push(option);
  }

  return gameStep;
};

const initialState = Object.freeze({
  currentStepIndex: 0,
  lives: 2,
  time: 30,
  stats: (new Array(10)).fill(RESULT_MODIFIER.UNKNOWN),
  steps: [generateStepData(`double`), generateStepData(`single`), generateStepData(`triple`)],
});

export default initialState;
