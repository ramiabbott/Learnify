import { useState } from 'react'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='App-header'>
      <Home /> 
      </div>
    </div>
  )
}

export default App
