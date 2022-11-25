import {useEffect, useState} from 'react';


const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <p>All {good + neutral + bad}</p>
      <p>Adverage {good + ( -bad )/2}</p>
      <p>Percetage {good / bad ? good / bad === Infinity ? 100 : (good / bad) * 100 : 0}</p>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <button onClick={addGood}>Good</button>
      <button onClick={addNeutral}>Neutral</button>
      <button onClick={addBad}>Bad</button>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      {good + neutral + bad > 0 ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No Feedback given</p>}
  
    </div>
  )
}

export default App