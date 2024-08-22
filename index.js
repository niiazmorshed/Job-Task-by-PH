const loadWeather = async () => {
  const res = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=b4dded29c6f947c7aa9224318242108&q=bangladesh"
  );
  const data = await res.json();
  displayWeather(data);
};
loadWeather();

const displayWeather = (i) => {
  const weatherContainer = document.getElementById("weatherContainer");
  const weatherCard = document.createElement("div");
  weatherCard.classList = `flex border w-3/2 gap-3`;
  weatherCard.innerHTML = `
  <div><h1 class="text-4xl">${i.current.temp_c}</h1></div>
  <div>
  <h3></h3>
  <h3>${i.location.name}</h3>
  <h3>${i.location.localtime}</h3>
  </div>
  <div><img src="//cdn.weatherapi.com/weather/64x64/night/353.png" alt=""></div>
  `;
  weatherContainer.appendChild(weatherCard);
};
