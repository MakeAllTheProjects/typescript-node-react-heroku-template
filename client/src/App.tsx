import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('loading')

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then(res => {
        setMessage(res.data.message)
      })
      .catch(err => {
        if (err) {
          console.error(err)
          setMessage("Error!")
        }
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{message}</p>
      </header>
    </div>
  )
}

export default App;
