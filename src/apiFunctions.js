export const getWeatherData = async () => {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=47ac169af086415e85a163023231706&q=london",
    { mode: "cors" }
  );
  const currentData = await response.json();
  console.log(currentData.current);
};
