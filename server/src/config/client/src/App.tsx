import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

import './App.scss'
import MessageBanner from './components/MessageBanner'

export const baseURL = process.env.REACT_APP_HEROKU_URL || 'http://localhost:5000'


interface WelcomeState {
  loading: boolean,
  message: string
}

type WelcomeAction =
  | { type: 'FETCH_SUCCESS', message: string }
  | { type: 'FETCH_ERROR' }

const initialWelcomeState = {
  loading: true,
  message: ""
}

export const GlobalContext = React.createContext<{
  state: WelcomeState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialWelcomeState,
  dispatch: () => null
})

const welcomeReducer = (state: WelcomeState, action: WelcomeAction) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        message: action.message
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        message: 'Something went wrong!'
      }
    default:
      return state
  }
}

function App() {
  const [welcomeState, welcomeDispatch] = useReducer(welcomeReducer, initialWelcomeState)

  useEffect(() => {
    axios.get(`${baseURL}/api/hello`)
      .then(res => {
        welcomeDispatch({
          type: 'FETCH_SUCCESS',
          message: res.data.message
        })
      })
      .catch(err => {
        console.error(err)
        welcomeDispatch({
          type: 'FETCH_ERROR'
        })
      })
  }, [])

  return (
    <div className="app">
      App
      <GlobalContext.Provider
        value={{
          state: welcomeState,
          dispatch: welcomeDispatch
        }}
      >
        <MessageBanner />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
