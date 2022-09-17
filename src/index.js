navigator.geolocation.getCurrentPosition(position => {
    const { latitude: lat, longitude: lon } = position.coords

    // use this one if in dev and you have local .env in project root with API_SECRET and your secret key
    // const URL = "/.netlify/functions/fetch-weather?lat=${lat}&lon=${lon}"

    // use this in dev or deployed, with API_SECRET in the NFunction's environment... (use your function's url)
    const URL = "https://keyhidertut.netlify.app/.netlify/functions/fetch-weather"

    fetch(URL)
        .then(res => {console.log(res.json())})
})