import { useState, useEffect } from 'react'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([{name: '', number: ''}]) 
  const [newEntry, setNewEntry] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleChange = (e) => {
    const value = e.target.value;
    setNewEntry({
      ...newEntry,
      [e.target.name]: value
    });
  }

  const handleFilter = (e) => {
    const text = e.target.value
    setFilter(text.toLowerCase())
    console.log(filter);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
    let counter = 0
    persons.forEach(person => {
      console.log(counter, '1st');
      if (person.number === newEntry.number) {
        counter =+ 1
        console.log(counter)
      } 
    })

    if (counter === 0) {
      console.log('submitted')
      const copy = [...persons, {name: newEntry.name, number: newEntry.number}]
      setPersons(copy)
      setNewEntry({name: '', number: ''})
    } else if (counter > 0) {
      alert(`${newEntry.name} is already in the phonebook`)
      setNewEntry({name: '', number: ''})

    }

  }
  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <AddContact handleChange={handleChange} handleSubmit={handleSubmit} newEntry={newEntry} />
      <h2>Numbers</h2>
      <Contacts filter={filter} persons={persons} />
    </>
  )
}

export default App