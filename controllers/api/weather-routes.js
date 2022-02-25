const apiKey = process.env.WEATHER_API;

async function currentWeather() {
  const getCurrent = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=austin&units=imperial&appid=${apiKey}`
  );
  let response = await getCurrent.json();
  console.log(response);
}

currentWeather();