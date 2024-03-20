import { useState } from 'react'


const Display = ({ votes, notes }) => {
  let maxKey = 0;
  let maxValue = 0;
  for (const key in votes) {
    const value = votes[key];
    if (value > maxValue) {
        maxValue = value;
        maxKey = Number(key);
    }
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{notes[maxKey]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  // const [largest, setLargest] = useState()

  const randomize = () => {
    const num = Math.round(Math.random() * (anecdotes.length - 1))
    console.log(num)
    setSelected(num)
  }

  const vote = () => {
    console.log(votes)
    const current = {...votes}
    if (current[selected]) {
      current[selected] += 1
    } else {
      current[selected] = 1
    }
    setVotes({ ...current })
  }

  // const returnLarg = () => {
  //   const large = findLargest()
  //   consol.log(large)
  //   return 1
  // }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected] || 0} votes</p>
      <button onClick={vote}>Vote</button>
      <button onClick={randomize}>Randomize</button>
      <Display votes={votes} notes={anecdotes}/>
    </div>

  )
}

export default App