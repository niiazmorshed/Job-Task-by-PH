const loadWeather = async (searchText) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=b4dded29c6f947c7aa9224318242108&q=${searchText}`
  );
  const data = await res.json();
  displayWeather(data);
};

const loadW = async (searchText) => {
  const res = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=b4dded29c6f947c7aa9224318242108&q=bangladesh"
  );
  const data = await res.json();
  displayWeather(data);
};
loadW();

const displayWeather = (i) => {
  const weatherContainer = document.getElementById("weatherContainer");
  weatherContainer.textContent = "";
  const weatherCard = document.createElement("div");
  weatherCard.classList = `flex gap-4`;
  weatherCard.innerHTML = `
  
  <div><h1 class="text-8xl font-manrope">${i.current.temp_c}</h1></div>
  <div>
  <h3 class="text-4xl font-manrope" >${i.location.name}</h3>
  <h3 class="text-2xl font-manrope" >${i.location.localtime}</h3>
  </div>
  <div><img src="//cdn.weatherapi.com/weather/64x64/night/353.png" alt=""></div>
  
  `;
  weatherContainer.appendChild(weatherCard);

  const forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.textContent = "";
  const forecastCard = document.createElement("div");
  forecastCard.classList = ``;
  forecastCard.innerHTML = `
    <div>
    
    <h1 class="text-6xl text-center font-manrope">Weather Details</h1>
    <br/>
    <h2 class= "text-3xl text-center font-manrope" >Overcast Clouds</h2>

    <div class="flex justify-around font-manrope">
        <p>Temp Max</p>
        <p>${i.current.heatindex_c} <i class="fa-solid fa-temperature-three-quarters fa-xl" style="color: #e90101;"></i> </p>
        
    </div>
    <br />

    <div class="flex justify-around font-manrope">
        <p>Temp Min</p>
        <p>${i.current.dewpoint_c} <i class="fa-solid fa-temperature-three-quarters fa-xl" style="color: #74C0FC;"></i> </p>
    </div>
    <br />
    <div class="flex justify-around font-manrope">
        <p>Humanidity</p>
        <p class= "font-manrope" >${i.current.humidity}% <i class="fa-solid fa-water fa-xl" style="color: #74C0FC;"></i></p>
    </div>
    <br />
        <div class="flex justify-around font-manrope">
        <p>Cloudy</p>
        <p>${i.current.cloud}% <i class="fa-solid fa-cloud fa-xl" style="color: #74C0FC;"></i></p>
    </div>
    <br />
        <div class="flex justify-around font-manrope">
        <p>Wind</p>
        <p class="font-manrope">${i.current.wind_kph} km/h</p>
    </div>
    <br />
    </div>
    `;
  forecastContainer.appendChild(forecastCard);
};

const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadWeather(searchText);
};
