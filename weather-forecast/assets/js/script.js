const apiKey = '740f562df2c7883dad5b3bb99ff9ffe2';
const weatherForecastItemsEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

async function fetchCoords(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const coords = await response.json();
        await fetchWeather(coords);
        timezone.innerHTML = "Current Timezone: " + city;
    } catch (error) {
        timezone.innerHTML = 'Please enter a valid location.';
    }
}

async function fetchWeather(coords) {
    const {
        lat,
        lon
    } = coords.coord;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data.');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        timezone.innerHTML = 'Please enter a valid location.';
    }
}

function displayWeather(data) {
    timezone.innerHTML += ` (${data.timezone})`;
    let otherdayforecast = '';
    let currentforecast = '';
    data.daily.forEach((day, idx) => {
        if (idx === 0) {
            currentforecast += getWeatherHTML(day, 'Today');
        } else {
            otherdayforecast += getWeatherHTML(day, window.moment(day.dt * 1000).format('ddd'));
        }
    });
    weatherForecastItemsEl.innerHTML = otherdayforecast;
    currentTempEl.innerHTML = currentforecast;
}

function getWeatherHTML(day, dayLabel) {
    if (dayLabel === 'Today') {
        return `
        <div class="row d-flex justify-content-center align-items-center h-100">
  <div class="col-md-5 d-flex align-items-center">
    <div class="mb-3 border-0 shadow p-4 card">
      <div class="row g-0 align-items-center">
        <div class="col-md-12 text-center">
          <h5 class="card-title">${dayLabel}</h5>
          <hr class="my-3">
        </div>
        <div class="col-md-6 text-center">
          <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
            class="card-img" alt="weather icon">
          <div class="description mt-2">${day.weather[0].description}</div>
        </div>
        <div class="col-md-6">
          <div class="card-body text-center">
            <div class="card-text">
              <div class="row">
                <div class="col">
                  <i class="fas fa-sun"></i> Day: ${day.temp.day}&#176; C
                </div>
                <div class="col">
                  <i class="fas fa-moon"></i> Night: ${day.temp.night}&#176; C
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <i class="fas fa-tint"></i> Humidity:
                </div>
                <div class="col">
                  <i class="fas fa-compress"></i> Pressure:
                </div>
              </div>
              <div class="row">
                <div class="col">
                  ${day.humidity}%
                </div>
                <div class="col">
                  ${day.pressure}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
    } else {
        return `
      <div class="card mb-3 border-0 shadow p-3">
        <div class="row g-0 align-items-center">
          <div class="col-md-3 p-3">
            <h5 class="card-title">${dayLabel}</h5>
          </div>
          <div class="col-md-3">
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
              class="card-img" alt="weather icon">
          </div>
          <div class="col-md-3">
            <div class="card-body">
              <div class="card-text">
                <div class="description">${day.weather[0].description}</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-body">
              <div class="card-text">
                <div class="m-1"><i class="fas fa-sun"></i>  &nbsp;Day: ${day.temp.day}&#176; C</div>
                <div class="m-1"><i class="fas fa-moon"></i>  &nbsp;Night: ${day.temp.night}&#176; C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    }
}

document.querySelector('.search button').addEventListener('click', search);
document.querySelector('.select button').addEventListener('click', searchDropdown);


function search() {
    fetchCoords(document.querySelector('.search-bar').value);
}

function searchDropdown() {
    fetchCoords(document.querySelector('.search-dropdown').value);
}

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});

fetchCoords('Chennai');