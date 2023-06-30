export const getWeatherData = async () => {
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=47ac169af086415e85a163023231706&q=london",
    { mode: "cors" }
  ).then((response) => {
    console.log(response.json());
  });
};
