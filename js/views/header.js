import {MAX_LIVES} from '../data/dictionaries';

const generateHeaderMarkup = (state) => {
  const navBlock = `
<div class="header__back">
  <span class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.png" width="101" height="44">
  </span>
</div>
`;

  const gameDataBlock = state ? `
  <h1 class="game__timer">${state.time}</h1>
  <div class="game__lives">
    ${(new Array(MAX_LIVES - state.lives))
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(`    `)}
    ${(new Array(state.lives))
    .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(`    `)}
  </div>` : ``;

  const headerTemplate = `
<header class="header">
${navBlock}
${gameDataBlock}
</header>
`;

  return headerTemplate;
};

export default generateHeaderMarkup;
