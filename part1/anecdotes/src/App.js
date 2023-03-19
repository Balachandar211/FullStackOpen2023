import { useState } from 'react'

const DisplayAnecdotes = ({ anecdotes, votes }) => {
  return (
    <div>
      {anecdotes}
      <div>
        has {votes} votes
      </div>
    </div>
  )
}


const MaxVote = ({ points, anecdotes }) => {
  const max = Math.max(...points)
  const index = points.indexOf(max)
  return (
    <div>
      <DisplayAnecdotes anecdotes={anecdotes[index]} votes={max} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  let length = anecdotes.length

  let index = Math.floor(Math.random() * length)

  const Vote = () => {
    const points = [...vote]
    points[selected] += 1
    setVote(points)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <DisplayAnecdotes anecdotes={anecdotes[selected]} votes={vote[selected]} />
      </div>
      <button onClick={Vote}>vote</button>
      <button onClick={() => setSelected(index)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <MaxVote points={vote} anecdotes={anecdotes} />
    </div>
  )
}

export default App