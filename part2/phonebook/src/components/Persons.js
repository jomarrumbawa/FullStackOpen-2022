const Persons = ({ persons, filteredName }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filteredName)
  )

  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  )
}

export default Persons
