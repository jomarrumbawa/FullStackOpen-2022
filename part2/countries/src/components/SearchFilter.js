const SearchFilter = ({ filteredName, handleChange }) => {
  console.log(filteredName)
  return (
    <>
      find countries <input value={filteredName} onChange={handleChange} />
    </>
  )
}

export default SearchFilter
