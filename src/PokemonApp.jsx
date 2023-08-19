import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {getPokemons} from "./store/slices/pokemon/thunks"

export default function PokemonApp() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
    console.log("useEffect")
  }, [])

  return (
    <>
        <h1>Pokemon APP</h1>
        <hr />

        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </>
  )
}
