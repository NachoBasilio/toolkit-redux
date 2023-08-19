import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemon, starLoadingPokemon } from "./pokemonSlices"

export const getPokemons = (page = 0) =>  {
    return async  ( dispatch, getState )=>{
        dispatch(starLoadingPokemon())  


        
        const {data} =  await pokemonApi.get(`/pokemon?offset=${page * 10}&limit=10`)

        dispatch(setPokemon({
            page : page+1,
            pokemon: data.results
        }))
    }
}
