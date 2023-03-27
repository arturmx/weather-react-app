// import {ReactComponent as Pressure} from './assets/pressure.svg';
// import {ReactComponent as Humidity} from './assets/humidity.svg';
// import {ReactComponent as Wind} from './assets/wind.svg';
import './style.css';
import edit from './assets/edit-24.png';
import arrow from './assets/arrow.png';

function App() {
  return (
    <section class="app">
    <form class="app__form">
      <input class="app__input" type="text" placeholder="Enter your city" value="Warsaw" />
      <button type="submit" class="app__go">
        <img src={arrow} />
      </button>
    </form>
    <div class="app__h1-wrapper">
      <h1 class="app__h1"></h1>
      <img class="app__edit active" src={edit} />
    </div>
    <p class="app__localtime"></p>
    <div class="switches">
      <div id="switcher1" class="switches__btn active">Forecast</div>
      <div id="switcher2" class="switches__btn">Air Quality</div>
    </div>
    <img class="app__central-icon" src=""alt=" " />
    <h2 class="app__temperature"></h2>
    <p class="app__state"></p>
    <div class="app__other-info">
      <div class="app__indicators">
        {/* <Wind /> */}
        <p class="app__wind"></p>
      </div>
      <div class="app__indicators">
        {/* <Humidity /> */}
        <p class="app__humidity"></p>
      </div>
      <div class="app__indicators">
        {/* <Pressure /> */}
        <p class="app__pressure"></p>
      </div>
    </div>
    <div class="forecast active">
      <h2 class="forecast__h2">Next 3 days forecast:</h2>
      <div class="forecast__wrapper">
        
      </div>
    </div>

    <div class="air">
      <h1 class="air__h2">Air Quality</h1>
      <div class="air__wrapper">
      </div>
    </div>
  </section>
  );
}

export default App;
