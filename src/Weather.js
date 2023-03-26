import React, { useState } from "react";
import FormartedDate from "./FormartedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",

      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{WeatherData.city}</h1>
        <ul>
          <li>
            <FormartedDate date={WeatherData.date} />
          </li>
          <li className="text-capitalize">{WeatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={WeatherData.iconUrl} alt={WeatherData.description} />

            <span className="temperature">
              {Math.round(WeatherData.temperature)}
            </span>
            <span className="units">°C|F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {WeatherData.humidity}%</li>
              <li>Wind: {Math.round(WeatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "836f4ef75ccee844372d8db2b2350564";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading......";
  }
}
