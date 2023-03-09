import fetch from "node-fetch";

export const getWeatherPage = async (req, res)=> {
    res.render("openWeatherMap", {data: null});
}

export const getWeatherDetail = async (req, res)=> {
    const { name, apiKey} = req.body;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        res.render("openWeatherMap", {data: data, url: url});
    });
}