import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pokemon: [],
    page: 0,
    isLoading: false,
}

const pokemonSlices = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    starLoadingPokemon: (state) => {
        state.isLoading = true
    },
    setPokemon: (state, action) => {
        state.isLoading = false
        state.page = action.payload.page
        state.pokemon = action.payload.pokemon
    }
  }
});

export const {starLoadingPokemon,setPokemon} = pokemonSlices.actions

export default pokemonSlices.reducer