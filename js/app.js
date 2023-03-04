const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    loader(true);
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city',temperature.name ? temperature.name: "No City Found");
    setInnerText('temperature', temperature.name? temperature.main.temp : "" );
    setInnerText('fl', temperature.name? temperature.main.feels_like : "");
    setInnerText('condition', temperature.name? temperature.weather[0].main : "");
    setInnerText('humidity', temperature.name? temperature.main.humidity: "");
    setInnerText('country', temperature.name? temperature.sys.country: "");
    setInnerText('ws', temperature.name? temperature.wind.speed: "");
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

    loader(false);
}

let loader = tof =>{
    let l= document.getElementById('loader');
    
    if(tof == true){
     l.classList.remove('visually-hidden');
    }
    else{
    l.classList.add('visually-hidden');
    }

}
function sp(){
    
}