import React from "react";
import { useState, useEffect } from "react";
import * as API from "services/pokeAPI";
import {PokeGallery} from "./pokeGallery"
import { toast } from "react-toastify";

export default function Pokemons() {
    const [pokemon,setPokemon] = useState([])
    
    useEffect(() => {
        const getPoke = async () => {
        try {
            const { cast } = await API.getPokeData();
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
        <PokeGallery pokemon={pokemon} />    
    )
}
