const SearchFilter = ({ filteredName, handleChange }) => {
  return (
    <>
      filter shown with a <input value={filteredName} onChange={handleChange} />
    </>
  )
}

export default SearchFilter
