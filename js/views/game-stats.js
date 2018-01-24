import generateStatsResultMarkup from './stats-result';

const generateGameStatsMarkup = (gameSessionState) => {
  const resultsMarkup = gameSessionState.stats.map((result) => {
    return generateStatsResultMarkup(result);
  }).join(``);

  const statsMarkup = `
<div class="stats">
  <ul class="stats">
    ${resultsMarkup}
  </ul>
</div>
`;

  return statsMarkup;
};

export default generateGameStatsMarkup;
