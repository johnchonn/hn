import { useState } from 'react'
import UsersView from './components/UsersView/UsersView'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Hacker News</h1>
      <UsersView />
    </div>
  )
}

export default App
