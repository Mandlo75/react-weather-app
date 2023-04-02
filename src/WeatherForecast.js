import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./weatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e947cb2640f1db92e6a19005bc43b435";
    let longitude = props.coordinates.lon;
    let lattitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
