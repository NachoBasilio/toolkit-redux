import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import pokemonSlices from './slices/pokemon/pokemonSlices'
import { todosApi } from './apis/todosApi'
   

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonSlices,

    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})