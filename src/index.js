document.addEventListener("DOMContentLoaded", () => {


  // create button for fetching weather forecast
  const main_button = document.createElement("button")
  main_button.textContent = "Get Forecast!"
  main_button.id = "main_button"

  document.getElementById("top_div").appendChild(main_button)

  }
),


navigator.geolocation.getCurrentPosition(position => {
    const { latitude: lat, longitude: lon } = position.coords

    // uncomment line below if in dev and you have local .env in project root with API_SECRET and your secret key
    // const URL = "/.netlify/functions/fetch-weather?lat=${lat}&lon=${lon}"

    // use this in dev or deployed, with API_SECRET in the NFunction's environment... (use your function's url)
    const URL = "https://keyhidertut.netlify.app/.netlify/functions/fetch-weather?lat=${lat}&lon=${lon}"



    document.getElementById("main_button").addEventListener("click", function() {

        const forecast_div = document.createElement("div")
        document.getElementById("top_div").appendChild(forecast_div)

        fetch(URL)

        .then(res => res.json())
        .then(data => 
            forecast_div.textContent = data.location.name +", " + data.location.country
        )

    })   
})