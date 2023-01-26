import { useState, useEffect } from "react";
import { getPokeData } from "services/pokeAPI";
import { toast } from "react-toastify";

export default function Pokemons() {
    const [pokemons,setPokemons] = useState(null)
    
    useEffect(() => {
        const getPoke = async () => {
        try {
            const { cast } = await getPokeData() 
            setPokemons(cast)
            }
        catch (error) {
            toast.error('Whoops')
            return
        }    
        }
        getPoke()
    })

    return (
        <>
        <ul>
            {pokemons?.map(({ name, url }) => (
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
        </>    
    )
}
