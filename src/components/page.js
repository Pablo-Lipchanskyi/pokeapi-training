import React from "react";
import { useState, useEffect } from "react";
import * as API from "services/pokeAPI";
import { toast } from "react-toastify";

export default function Pokemons() {
    const [pokemon,setPokemon] = useState([])
    
    useEffect(() => {
        const getPoke = async () => {
        try {
            const  hits  = await API.getPokeData();
            setPokemon(hits,...pokemon)

            }
        catch (error) {
            toast.error('Whoops')
            return
        }    
        }
        getPoke()
    }, [])

    return (
     <ul>
      {pokemon.map((poke) => (
            <li key={poke.name}>
            <h2>
                Product - {poke.name}
            </h2>
              <p>
                  <img src={poke.url}></img>
                  url - {poke.url}
                  id - {poke.id}
            </p>
            </li>
            ))}
    </ul> 
    )
}
