import fetch from "node-fetch";

export const getFaker = async (req, res)=> {
    res.render("faker", {data: null});
}

export const getFakeDetail = async (req, res)=> {
    const { options } = req.body;
    await fetch(`https://fakerapi.it/api/v1/${options}?_quantity=1&_locale=en_EN`)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        const output = data.data[0];
        res.render("faker", {data: output, option: options});
    });
}