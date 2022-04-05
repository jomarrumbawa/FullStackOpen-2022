import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import AddPersonForm from './components/AddPersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data))
  }

  useEffect(hook, [])

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    persons.map((person) => {
      if (newPerson.name === person.name) {
        alert(`${newPerson.name} is already in the phone book`)
      } else {
        setNewName('')
        setNewNumber('')
        setPersons(persons.concat(newPerson))
      }
    })
  }

  const handleNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleFilteredNameChange = (e) => {
    setFilteredName(e.target.value)
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <SearchFilter
        filteredName={filteredName}
        handleChange={handleFilteredNameChange}
      />
      <AddPersonForm
        handleSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filteredName={filteredName} />
    </div>
  )
}

export default App
