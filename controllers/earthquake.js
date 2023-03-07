import fetch from "node-fetch";

export const getData = async (req, res)=> {
    res.render("earthquake", {data: null});
}

export const addParams = async (req, res)=> {
    const { startDate, endDate, magnitude} = req.body;
    await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&maxmagnitude=${magnitude}&orderby=time&limit=10`)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        res.render("earthquake", {data});
    });
    
}