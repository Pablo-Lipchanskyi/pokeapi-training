import axios from "axios";
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'

export const getPokeData = async () => {
    const response = await axios.get('/ability');
    return response.data.results
}