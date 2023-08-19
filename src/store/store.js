import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import pokemonSlices from './slices/pokemon/pokemonSlices'
   

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonSlices,
  },
})