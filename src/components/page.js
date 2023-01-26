import React from "react";
import { useState, useEffect } from "react";
import { getPokeData } from "services/pokeAPI";
import { toast } from "react-toastify";

export const Pokemons = () => {
    const [pokemon,setPokemon] = useState([])
    
    useEffect(() => {
        const getPoke = async () => {
        try {
            const { cast } = await getPokeData() 
            setPokemon(cast)
            }
        catch (error) {
            toast.error('Whoops')
            return
        }    
        }
        getPoke()
    })

    return (
        
        <ul>
            {pokemon?.map(({ name, url }) => (
            <li>
            <h2>
                Product - {name}
            </h2>
            <p>
                url - {url}
            </p>
            </li>
            ))}
            
            </ul>     
    )
}
export default Pokemons