import fetch from "node-fetch";

export const getRickAndMortyPage = async (req, res)=> {
        res.render("rickAndMorty", {data: null});
}

export const getCharacterDetail = async(req, res)=> {
    await fetch(`https://rickandmortyapi.com/api/character`)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        const output = data.results.map(ele=> {
            return({
                name: ele.name, 
                species: ele.species, 
                status: ele.status,
                type: ele.type,
                gender: ele.gender,
                origin: ele.origin.name,
                location: ele.location.name,
                image: ele.image
            })});
        console.log(output);
        res.render("rickAndMorty", {data: output});
    });
}
