export const renderWeatherData = (data) => {
  const city = data.location.name;
  const { country } = data.location;
  const temperature = data.current.temp_c;
  const windSpeed = data.current.wind_kph;
  const windDirection = data.current.wind_dir;
  const { humidity } = data.current;
  const cloudCoverage = data.current.cloud;
  const condition = data.current.condition.text;
  const localTime = data.location.localtime;

  console.log(city);
  console.log(country);
  console.log(temperature);
  console.log(windSpeed);
  console.log(windDirection);
  console.log(humidity);
  console.log(cloudCoverage);
  console.log(condition);
  console.log(localTime);

  renderLocation(city, country);
  renderWeatherInfo(temperature, condition, localTime);
};

export const renderLocation = (location, country) => {
  const locationElement = document.querySelector(".location");
  locationElement.innerText = "";
  locationElement.innerText = `${location}, ${country}`;
};

export const renderWeatherInfo = (temp, cond, time) => {
  const temperatureElement = document.querySelector(".temperature");
  const conditionElement = document.querySelector(".condition");
  const dateElement = document.querySelector(".date");

  temperatureElement.innerText = "";
  conditionElement.innerText = "";
  dateElement.innerText = "";

  temperatureElement.innerText = `${temp}°`;
  conditionElement.innerText = `${cond}`;
  dateElement.innerText = "time";
};
