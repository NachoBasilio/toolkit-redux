import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store.js'
import {Provider} from 'react-redux'
import './index.css'
import PokemonApp from './PokemonApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </React.StrictMode>,
)
