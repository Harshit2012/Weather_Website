function getWeather() {
    const apiKey = '2fa73590fd8b5a4c6e68098ad5625395';
    const cityInput = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfoElement = document.getElementById('weatherInfo');

            if (data.cod === '404') {
                weatherInfoElement.innerHTML = 'City not found. Please enter a valid city.';
            } else {
                const temperature = (data.main.temp - 273.15).toFixed(2);
                const description = data.weather[0].description;

                weatherInfoElement.innerHTML = `Temperature: ${temperature}°C<br>Condition: ${description}`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}