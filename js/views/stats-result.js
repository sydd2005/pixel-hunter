const generateStatsResultMarkup = (resultModifier) => {
  const statsResultMarkup = `
<li class="stats__result stats__result--${resultModifier}"></li>
  `;

  return statsResultMarkup;
};

export default generateStatsResultMarkup;
