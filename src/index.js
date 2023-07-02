import { getWeatherData } from "./apiFunctions";
import { renderWeatherData } from "./domFunctions";

const form = document.querySelector("form");
const searchInputValue = document.querySelector("#search");

// getWeatherData("Seoul");
// call function with return value from getWeatherData
renderWeatherData(await getWeatherData("seoul"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherData(searchInputValue.value);
});
