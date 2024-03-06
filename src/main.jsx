import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'

import 'minireset.css'
import '../src/styles/global.css'
import '../src/styles/variables.css'
import { UserProvider } from './context/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)
