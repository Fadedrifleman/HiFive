import fetch from "node-fetch";

export const getWeatherPage = async (req, res)=> {
    res.render("openWeatherMap", {data: null});
}

export const getWeatherDetail = async (req, res)=> {
    const { name, apiKey} = req.body;
    await fetch(`https://www.behindthename.com/api/lookup.json?name=${name}&key=${apiKey}`)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        if(data.error){
            res.render("behindTheName", {data: [{error:"Name not found", gender:'-'}]});
        }
        res.render("behindTheName", {data});
    });
}