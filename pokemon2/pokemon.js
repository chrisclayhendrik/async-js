import fetch from "node-fetch";

const fetchPokemon = async (id) => {
    try {
        const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await rest.json();
        return data
    } catch (err){
        console.log(err)
    }
}

fetchPokemon(151).then((data) =>{
    console.log(data.name, data.types[0].type.name)
})
