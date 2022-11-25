import { useState } from 'react'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newEntry, setNewEntry] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('')


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