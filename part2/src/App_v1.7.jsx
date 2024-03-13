import { useState } from 'react'


const Button = (props) => {
  return (
  <button onClick={props.handleOnClick}>{props.text}</button>
  )
}

const Stats = (props) => {
  if (Object.keys(props.value).every(key => props.value[key] === 0)) {
    return (
    <p>No Feedback Given</p>
    )
  } else {
    const newArr = [];
    const ratingObj = props.value
    Object.keys(ratingObj).forEach(key => {
      newArr.push(<p key={key}>{key} {ratingObj[key]}</p>)
    })
    return (
      <>
      {newArr}
      </>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  const positive = (good / all) * 100


  const changeGood = () => {
    console.log('added to good')
    const newValue = good + 1
    setGood(newValue)
  }

  const changeBad = () => {
    console.log('added to bad')
    setBad(bad + 1)
  }

  const changeNetural = () => {
    console.log('added to neutral')
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleOnClick={changeGood} text={'good'}/>
      <Button handleOnClick={changeBad} text={'bad'}/>
      <Button handleOnClick={changeNetural} text={'neutral'}/>
      <h1>Stats</h1>
      <Stats value={{ good: good, bad: bad, neutral: neutral }} text={'good'} />
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App