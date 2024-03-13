import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)


  const handleClick = () => {
    setCounter(counter + 1)
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>

      <button onClick={() => {      // inline function 
        console.log('clicked')
        setCounter(counter + 1)
      }}>
      plus
      </button>
    </div>
  )
}

export default App