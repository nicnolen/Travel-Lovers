

// Function to display current weather
var displayCurrentWeather = function (weather, city) {
  // clear old content
  currentWeatherEl.innerHTML = '';
  citySearchInputEl.textContent = city;
  // Make sure the first letter of the city is capitalized
  citySearchInputEl.classList = 'text-capitalize';

  // create date element using moments.js. Use span to make it inline
  var currentDate = document.createElement('span');
  // set text content using moments.js
  currentDate.textContent = ' (' + moment(weather.dt.value).format('L') + ') ';
  citySearchInputEl.appendChild(currentDate);

  // create an image element
  var weatherIcon = document.createElement('img');
  // set the source
  weatherIcon.setAttribute(
    'src',
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  );
  // append to city search input
  citySearchInputEl.appendChild(weatherIcon);

  // create a span element to hold temperature data
  var temperatureEl = document.createElement('span');
  // set the text content. NOTE: \u00B0 is the unicode character for the degree symbol
  temperatureEl.textContent = 'Temperature: ' + weather.main.temp + '\u00B0 F';
  // set class list
  temperatureEl.classList = 'list-group-item';
  // append to city search input
  citySearchInputEl.appendChild(temperatureEl);

  // create a span element for humidity
  var humidityEl = document.createElement('span');
  // set the text content
  humidityEl.textContent = 'Humidity: ' + weather.main.humidity + '%';
  // set the class
  humidityEl.classList = 'list-group-item';
  // append to city search input
  citySearchInputEl.appendChild(humidityEl);

  // create a span element for wind speed
  var windSpeedEl = document.createElement('span');
  // set text content
  windSpeedEl.textContent = 'Wind Speed: ' + weather.wind.speed + 'MPH';
  // set the class
  windSpeedEl.classList = 'list-group-item';
  // append to city search input
  citySearchInputEl.appendChild(windSpeedEl);

  var lat = weather.coord.lat;
  var lon = weather.coord.lon;
  // call the function to get the uv index
  getUvIndex(lat, lon);
  fiveDay(lat, lon);
};

var getUserRepos = function () {
  console.log('function was called');
};

getUserRepos();
