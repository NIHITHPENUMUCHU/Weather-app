function getWeatherInfo()
{
    let cityName = document.getElementById("city").value;
    console.log("City: " + cityName);
    getInfoFromAPI(cityName);

}

function getInfoFromAPI(city) {
    const apiKey = "1ddb570d0b9397d87fe0925ebd50034a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200)
        {
            const weatherDetails = `
                      <p>Temperature: ${data.main.temp}°C</p>
                      <p>Humidity: ${data.main.humidity}%</p>
                      <p>Weather: ${data.weather[0].description}</p>
                  `;
            document.getElementById("weatherinfo").innerHTML = weatherDetails;
        }
      });
  }