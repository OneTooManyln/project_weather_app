import { getWeatherData } from "./apiFunctions";
import { renderWeatherData, renderWorldWeatherInfo } from "./domFunctions";

const form = document.querySelector("form");
const searchInputValue = document.querySelector("#search");

// getWeatherData("Seoul");
// call function with return value from getWeatherData
renderWeatherData(await getWeatherData("seoul"));
renderWorldWeatherInfo();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  renderWeatherData(await getWeatherData(searchInputValue.value));
  searchInputValue.value = "";
});
