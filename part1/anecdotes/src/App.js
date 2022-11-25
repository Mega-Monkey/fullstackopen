import {useEffect, useState} from 'react';


const Anecdotes = () => {

  // const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0});
  const [mostVotes, setMostVotes] = useState(0)

  // const copy = { ...points }
  // console.log(points);

  const newAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  
  const points = { 0: 0, 1: 0, 2: 0, 3: 0 }
  
  const handleVote = async () => {
    const copy = { ...votes }
    // increment the property 2 value by one
    copy[selected] += 1   

    setVotes({...copy})
  }
  
  useEffect(() => {
    let votesValueArray = Object.values(votes)
    let highest = votesValueArray.indexOf(Math.max(...votesValueArray))
    setMostVotes(highest)
  }, [votes])

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <div>
      {anecdotes[selected]}
      </div>
      <p>
        has {votes[selected]} Votes
      </p>
      <button onClick={handleVote}>Vote</button> <button onClick={newAnecdote}>New Anecdote</button>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[mostVotes]}
      <p>has {votes[mostVotes]} votes</p>
    </div>

  )
}



const App = () => {
  // save clicks of each button to its own state

  return (
      <Anecdotes />
  )
}

export default App