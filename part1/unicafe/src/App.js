import { useState } from 'react'


const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  const score = good * 1 + bad * -1
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="total" value={total} />
        <StatisticsLine text="average" value={score / total} />
        <StatisticsLine text="positive" value={good / total * 100 + "%"} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const receiveGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const receiveNeutal = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const receiveBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={receiveGood}>good</button>
      <button onClick={receiveNeutal}>neutral</button>
      <button onClick={receiveBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App