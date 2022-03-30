import { useState } from 'react'

const Button = ({ handleClick, stat }) => {
  return <button onClick={handleClick}>{stat}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral

  const average = (good - bad) / all

  const positive = (good / all) * 100

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {all && average}</p>
      <p>positive {all && positive}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood((prevState) => prevState + 1)
  }

  const handleNeutral = () => {
    setNeutral((prevState) => prevState + 1)
  }

  const handleBad = () => {
    setBad((prevState) => prevState + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} stat="good" />
      <Button handleClick={handleNeutral} stat="neutral" />
      <Button handleClick={handleBad} stat="bad" />
      {good + bad + neutral ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App
