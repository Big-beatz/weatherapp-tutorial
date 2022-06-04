import React, {useState, useEffect} from 'react';
import './ForecastTab.css';
import axios from 'axios'
const apiKey = 'a4703a48fc688fe98386768dca787a2c'


function ForecastTab({ coordinates }) {
    const [forecasts, setForecasts] = useState([]);
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            toggleError(false)
            toggleLoading(true)
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
                setForecasts(result.data.daily.slice(1, 6));
            } catch (e) {
                console.error(e);
                toggleError(true)

            }
            toggleLoading(false)
        }

        if (coordinates) {
            fetchData();
        }
    }, [coordinates]);

    function createDateString(timestamp) {
        const day = new Date(timestamp * 1000);

        return day.toLocaleDateString('nl-NL', { weekday: 'long' });
    }

    return (
        <div className="tab-wrapper">
            {loading && <span>Loading...</span>}

            {error && <span className="no-forecast">Er is iets misgegaan met het ophalen van de data</span>}
            {forecasts.map((day) => {
                return(
                    <article className="forecast-day"
                    key={day.dt}>
                        <p className="day-description">
                            {createDateString(day.dt)}
                        </p>

                        <section className="forecast-weather">
            <span>
                {day.temp.day}
            </span>
                            <span className="weather-description">
              {day.weather[0].description}
            </span>
                        </section>
                    </article>

                )
            })}
        </div>
    );
};

export default ForecastTab;