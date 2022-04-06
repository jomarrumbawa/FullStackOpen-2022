import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredName, setFilteredName] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data))
  }

  useEffect(hook, [])

  const handleFilteredNameChange = (e) => {
    setFilteredName(e.target.value)
  }

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filteredName)
  )

  const countriesComponent =
    filteredCountries.length < 10 ? (
      filteredCountries.map((country) => (
        <p key={country.name.common}>{country.name.common}</p>
      ))
    ) : (
      <p>Too many countries, specify another filter</p>
    )

  return (
    <div>
      <SearchFilter
        filteredName={filteredName}
        handleChange={handleFilteredNameChange}
      />
      {countriesComponent}
    </div>
  )
}

export default App
