import React, {useState, useEffect} from 'react';
import './ForecastTab.css';
import axios from 'axios'
const apiKey = 'a4703a48fc688fe98386768dca787a2c'


function ForecastTab({ coordinates }) {
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setForecasts(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        if (coordinates) {
            fetchData();
        }
    }, [coordinates]);

    return (
        <div className="tab-wrapper">
            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>
        </div>
    );
};

export default ForecastTab;