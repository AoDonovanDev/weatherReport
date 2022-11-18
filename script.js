const weatherPromise = fetch('https://api.openweathermap.org/data/2.5/weather?zip=37604&units=imperial&APPID=92e8bde80d10c60895c666edb58dd53b')
  .then((response) => response.json())
  .catch(function(err) {
    console.log("somethin is fucked " + err)
  });
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
const asyncStyle = async () => {
  const someData = await weatherPromise;
  console.log(someData.main)
}
displayApiData();
asyncStyle();