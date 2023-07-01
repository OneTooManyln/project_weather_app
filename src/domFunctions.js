export const renderWeatherData = (data) => {
  const city = data.location.name;
  const { country } = data.location;
  const temperature = data.current.temp_c;
  const windSpeed = data.current.wind_kph;
  const windDirection = data.current.wind_dir;
  const { humidity } = data.current;
  const cloudCoverage = data.current.cloud;
  const { condition } = data.current;
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
};

export const renderLocation = (location, country) => {
  const locationElement = document.querySelector(".location");
  locationElement.innerText = "";
  locationElement.innerText = `${location}, ${country}`;
};
