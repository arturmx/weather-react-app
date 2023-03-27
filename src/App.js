// import {ReactComponent as Pressure} from './assets/pressure.svg';
// import {ReactComponent as Humidity} from './assets/humidity.svg';
// import {ReactComponent as Wind} from './assets/wind.svg';
import {useState} from 'react';
import './style.css';
import edit from './assets/edit-24.png';
import arrow from './assets/arrow.png';
import Pencil from './components/Pencil'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const airQualityArrKeys = ['Carbon Monoxide','Ozone','Nitrogen dioxide','Sulphur dioxide','PM2.5','PM10','US-EPA Index','UK Defra Index'];

function App() {
  const [data, setData] = useState(false);

  const getWeather = function() {
    // const place = input.value;
    const place = "Warsaw";
  
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=db66d43c6d024009b4b123828232203&q=${place}&days=4&aqi=yes&alerts=no`)
    .then((response) => response.json())
    .then((result) => {
      setData(result)
      console.log(result);
    });
  }

  return (
    <>
    {data ? (
      <section className="app">
        <form className="app__form">
          {/* <input className="app__input" type="text" placeholder="Enter your city" value="Warsaw" /> */}
          <button type="submit" className="app__go">
            <img src={arrow} />
          </button>
        </form>
        <div className="app__h1-wrapper">
          <h1 className="app__h1">{data.location.name}</h1>
          <img className="app__edit active" src={edit} onClick={getWeather} />
        </div>
        <p className="app__localtime">{data.dateString}</p>
        <div className="switches">
          <div id="switcher1" className="switches__btn active">Forecast</div>
          <div id="switcher2" className="switches__btn">Air Quality</div>
        </div>
        <img className="app__central-icon" src={'https:' + data.current.condition.icon} alt=" " />
        <h2 className="app__temperature">{data.current.temp_c + '℃'}</h2>
        <p className="app__state">{data.current.condition.text}</p>
        <div className="app__other-info">
          <div className="app__indicators">
            {/* <Wind /> */}
            <p className="app__wind">{data.current.wind_kph + ' km/h'}</p>
          </div>
          <div className="app__indicators">
            {/* <Humidity /> */}
            <p className="app__humidity">{data.current.humidity + ' %'}</p>
          </div>
          <div className="app__indicators">
            {/* <Pressure /> */}
            <p className="app__pressure">{data.current.pressure_mb + ' hpa'}</p>
          </div>
        </div>
        <div className="forecast">
          <h2 className="forecast__h2">Next 3 days forecast:</h2>
          <div className="forecast__wrapper">
            {data.forecast.forecastday.map(function(el) {
              let mydate = new Date(el.date);
              let myday = mydate.toLocaleString('en-us', {weekday: 'long'});

              return (
                <div className="forecast__day">
                  <p className="forecast__date">{myday}</p>
                  <p className="forecast__daytemp">{el.day.avgtemp_c}</p>
                  <img src={'https:' + el.day.condition.icon} alt="" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="air active">
          <h1 className="air__h2">Air Quality</h1>
          <div className="air__wrapper">
            {Object.values(data.current.air_quality).map(function(el, i) {
              return (
                <div className="air__item">
                  <span className="air__item-name">{airQualityArrKeys[i]}</span>
                  <span>{Math.round(el * 100) / 100}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      ) : <Pencil handleClick={getWeather} />}
    </>
  );
}

export default App;
