import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import './App.css';
import ForecastTab from "./pages/forecastTab/ForecastTab";


const apiKey = 'a4703a48fc688fe98386768dca787a2c'


function App() {
  const [weatherData, setWeatherData] = useState({})
  const [location, setLocation] = useState('')
  // const [coordinates, setCoordinates] = useState('')

  useEffect(() => {
  async function fetchData() {
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
      setWeatherData(result.data)
    } catch (e) {
      console.error(e)
    }
  }
  if(location){
    fetchData()
  }
}, [location])



  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar setLocationHandler={setLocation} />

          <span className="location-details">
            {Object.keys(weatherData).length > 0 &&
            <>
              <h2>{weatherData.weather[0].description}</h2>
              <h3>{weatherData.name}</h3>
              <h1>{weatherData.main.temp}</h1>
            </>
            }

          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu/>

          <div className="tab-wrapper">
            <ForecastTab coordinates={weatherData.coord}/>
          </div>
        </div>

        <MetricSlider/>
      </div>
    </>
  );
}

export default App;
