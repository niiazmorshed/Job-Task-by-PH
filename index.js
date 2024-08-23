const loadWeather = async (searchText) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=b4dded29c6f947c7aa9224318242108&q=${searchText}`
  );
  const data = await res.json();
  console.log(data)
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
  weatherCard.classList = `lg:flex gap-4 p-4`;
  weatherCard.innerHTML = `
  
  <div><h1> <span class="text-8xl font-manrope">${i.current.temp_c}</span> <i class="fa-solid fa-circle-notch fa-lg align-top"></i></h1>
  
  </div>
  
  
  <div>
  <h3 class="text-6xl font-manrope font-bold text-blue-400" >  ${i.location.name}</h3>
  <h3 class="text-2xl font-manrope font-extrabold text-yellow-600" ><span class="font-bold ">Date & Time:</span> ${i.location.localtime}</h3>
  <h1 class="text-2xl font-manrope font-extrabold text-yellow-600" > <span class=" font-bold font-manrope text-2xl " >Weather Condition:</span> ${i.current.condition.text}</h1>
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
    
    <h1 class="text-6xl text-center font-manrope font-bold py-4">Weather Details</h1>
    <br/>
    <div class="flex justify-around font-manrope">
        <p class="text-2xl font-manrope font-bold">Temp Max</p>
        <p class="text-2xl font-bold">${i.current.heatindex_c} <i class="fa-solid fa-temperature-three-quarters fa-xl" style="color: #e90101;"></i> </p>
        
    </div>
    <br />

    <div class="flex justify-around font-manrope">
        <p class="text-2xl font-manrope font-bold" >Temp Min</p>
        <p class="text-2xl font-bold">${i.current.dewpoint_c} <i class="fa-solid fa-temperature-three-quarters fa-xl" style="color: #74C0FC;"></i> </p>
    </div>
    <br />
    <div class="flex justify-around font-manrope">
        <p class="text-2xl font-manrope font-bold" >Humanidity</p>
        <p class= "font-manrope text-2xl font-bold" >${i.current.humidity}% <i class="fa-solid fa-water fa-xl" style="color: #74C0FC;"></i></p>
    </div>
    <br />
        <div class="flex justify-around font-manrope">
        <p class="text-2xl font-bold font-manrope" >Cloudy</p>
        <p class="text-2xl font-bold" >${i.current.cloud}% <i class="fa-solid fa-cloud fa-xl" style="color: #74C0FC;"></i></p>
    </div>
    <br />
        <div class="flex justify-around font-manrope">
        <p class="text-2xl font-manrope font-bold" >Wind</p>
        <p class="font-manrope text-2xl font-bold">${i.current.wind_kph} km/h</p>
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
