import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getPokemons} from "./store/slices/pokemon/thunks"

export default function PokemonApp() {
  const dispatch = useDispatch()
  const {pokemon, page, isLoading} = useSelector(state => state.pokemon)

  useEffect(() => {
    dispatch(getPokemons())
    console.log("useEffect")
  }, [])

  return (
    <>
        <h1>Pokemon APP</h1>
        <hr />
        {isLoading ? <p>Loading...</p>:
        <ul>
          {pokemon.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
        }
        <button
         onClick={()=>{dispatch(getPokemons(page))}}
        >
          Siguiente pagina...
        </button>
    </>
  )
}
