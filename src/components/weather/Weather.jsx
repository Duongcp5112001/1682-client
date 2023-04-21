import React, { useState, useEffect } from 'react';
import "./weather.scss";

function Weather() {
const [weather, setWeather] = useState(null);

useEffect(() => {
const apiKey = 'fb5d1739c3b20cfdc0940308737f7dd6';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Hanoi&units=metric&appid=${apiKey}`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        setWeather({
            location: data.name,
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: data.weather[0].icon
        });
    })
    .catch(error => console.log(error));
}, []);

return (
<div>
    {weather && (
    <div className="weatherIcon">
        <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon" />
        {` ${weather.temperature}°C ${weather.location}`}
    </div>
    )}
</div>
);
}

export default Weather;
