import React, { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <div className="card">
      <h1>Counter App</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)} className='green'>Increment</button>
        <button onClick={() => setCount(count - 1)} className='red'>Decrement</button>
        <button onClick={() => setCount(0)} className='reset'>Reset</button>
      </div>
    </div>
  </div>
}

export default App
