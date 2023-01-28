import axios from "axios";
axios.defaults.baseURL = 'https://pokeapi.co/api/'

export const getPokeData = async () => {
    const response = await axios.get('v2/generation');
    console.log(response.data)
    return response.data.results
}