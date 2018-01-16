import createElementFromTemplate from './../dom-factory';
import showScreen from './../show-screen';
import createGreetingScreen from './greeting';
import createFooterMarkup from './footer';

const createIntroScreen = () => {
  const introElement = createElementFromTemplate(`
<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>
${createFooterMarkup()}
`);

  introElement.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    showScreen(createGreetingScreen());
  });

  return introElement;
};

export default createIntroScreen;
