
//Weather Cordinites
axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
  .then(res => {
    const weather = res.data


    const latitude = weather.city.coord.lat
    const longtitude = weather.city.coord.lon
    // Data from UVI
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&units=imperial&appid=d91f911bcf2c0f925fb6535547a5ddc9`)


      //Creating Arrays for each day of the Week
      .then(resp => {
        let today = resp.data
        const uvi = resp.data.current.uvi
        const city = weather.city.name

      })


    let day1 = {
      icon: weather.list[0].weather[0].icon,
      date: weather.list[0].dt_txt.split("")[0],
      temp: weather.list[0].main.temp,
      wind: weather.list[0].wind.speed,
      humid: weather.list[0].main.humidity

    }

    let day2 = {
      icon: weather.list[8].weather[8].icon,
      date: weather.list[8].dt_txt.split("")[0],
      temp: weather.list[8].main.temp,
      wind: weather.list[8].wind.speed,
      humid: weather.list[8].main.humidity

    }

    let day3 = {
      icon: weather.list[16].weather[16].icon,
      date: weather.list[16].dt_txt.split("")[0],
      temp: weather.list[16].main.temp,
      wind: weather.list[16].wind.speed,
      humid: weather.list[16].main.humidity

    }

    let day4 = {
      icon: weather.list[24].weather[24].icon,
      date: weather.list[24].dt_txt.split("")[0],
      temp: weather.list[24].main.temp,
      wind: weather.list[24].wind.speed,
      humid: weather.list[24].main.humidity
    }

    let day5 = {
      icon: weather.list[32].weather[32].icon,
      date: weather.list[32].dt_txt.split("")[0],
      temp: weather.list[32].main.temp,
      wind: weather.list[32].wind.speed,
      humid: weather.list[32].main.humidity

    }