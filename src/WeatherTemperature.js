import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </span>
  );
}
