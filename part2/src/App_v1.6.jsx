import { useState } from 'react'


const Button = () => {
  <button onClick={props.handleOnClick}>{props.text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const changeGood = () => {
    setGood(good + 1)
  }

  const changeBad = () => {
    setBad(bad + 1)
  }

  const changeNetural = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleOnClick={() => changeGood} text={'good'}/>
      <Button handleOnClick={() => changeBad} text={'bad'}/>
      <Button handleOnClick={() => changeNetural} text={'neutral'}/>
      <h1>Stats</h1>
      code here
    </div>
  )
}

export default App