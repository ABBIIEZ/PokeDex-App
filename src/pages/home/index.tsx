// file : index.tsx from folder home

import React, { useEffect } from 'react'
import { pokemonListServices, pokemonDetailServices } from "@/services";

const HomePages = () => {

    const callData = async () => {
        const data = await pokemonDetailServices.getPokemonDetail("ditto");
        console.log('data', data.data);

    }

    useEffect(() => {
        callData()
    }, [])

    return (
        <div>HomePages</div>
    )
}

export default HomePages