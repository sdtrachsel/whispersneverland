import React from "react";
import "./JournalFilter.css"

const JournalFilter = ({journalEntries, setFilteredEntries, setIsFiltered}) => {

  const applyFilter = (event) => {
    event.preventDefault()
    setIsFiltered(true)
    setFilteredEntries()
  }
  return (
    <div className="filter-wrapper">
      <form onSubmit={(event) => applyFilter(event)}>
        <label htmlFor="date-filter">Find by date:</label>
        <input id="date-filter" type="date" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default JournalFilter;