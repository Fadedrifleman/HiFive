import fetch from "node-fetch";

export const getRickAndMortyPage = async (req, res)=> {
    await fetch(`https://rickandmortyapi.com/api/character`)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        const output = data.results;
        //console.log(output);
        res.render("rickAndMorty", {data: output});
    });
    
}
