function getWeatherData(city) {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=01ed09787471c3c54b3e051988071182&units=metric&lang=fr`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.cod != 200) {
                infos.innerHTML = "Ville non trouvée";
            } else {
                infos.innerHTML = `${data.city.name} / ${data.city.country}`;
            }
        })
        .catch((error) => {
            data.innerHTML = "Ville non trouvée";
        })
}

searchBtn.addEventListener("click", () => {
    getWeatherData(city.value);
});

function addFavorite(city) {
    // on créé une durée de vie de 1 jour pour le cookie
    let date = new Date(Date.now() + 86400000); //86400000ms = 1 jour
    date = date.toUTCString();

    //Crée ou met à jour un cookie 'user'
    document.cookie = `favoris=${city}; path=/; expires=${date}`;
}

addFavorite("Paris")

  