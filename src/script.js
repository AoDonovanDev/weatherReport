import { weatherPromise } from "./apiHandler";
const unitMode = "F";
const displayApiData = () => {
  weatherPromise.then((fetchedData) => {
    console.log(fetchedData);
    for (const property in fetchedData.main) {
      let weatherProps = document.createElement('p')
      weatherProps.innerHTML = `${property}: ${fetchedData.main[property]}`;
      document.getElementById("weatherData").appendChild(weatherProps);
    }
  })
}
const parseWeatherData = async () => {
  let parsedArray = [];
  const rawData = await weatherPromise;
  for (const property in rawData.main) {
    parsedArray.push(`${property}: ${rawData.main[property]}`);
  }
  document.getElementById("location").innerHTML = rawData.name;
  let cardTxt = document.createElement('p');
  let todayCard = document.getElementById("currentTemp");
  let snap = new Image();
  let condition = document.createElement('p');
  condition.innerHTML = rawData.weather[0].description;
  cardTxt.innerHTML = rawData.main.temp + "° " + unitMode;
  snap.src = "https://openweathermap.org/img/wn/" + rawData.weather[0].icon +"@2x.png"
  snap.classList.add("snap");
  todayCard.appendChild(cardTxt);
  todayCard.appendChild(condition);
  todayCard.appendChild(snap);
  parsedArray.push(rawData.weather);
  console.log(parsedArray);
}
displayApiData();
parseWeatherData();
/* 
goldenmonk10 */