import { getWeatherData } from "./apiFunctions";

const form = document.querySelector("form");
const searchInputValue = document.querySelector("#search");

getWeatherData("Seoul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherData(searchInputValue.value);
});
