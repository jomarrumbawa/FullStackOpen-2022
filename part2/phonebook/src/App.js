import { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import AddPersonForm from './components/AddPersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

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

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filteredName)
  )

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
