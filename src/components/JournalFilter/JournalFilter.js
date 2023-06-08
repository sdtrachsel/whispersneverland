import React, { useState } from "react";
import "./JournalFilter.css"

const JournalFilter = ({journalEntries, setFilteredEntries, setIsFiltered}) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); 
  }

  const applyFilter = (event) => {
    event.preventDefault()
    const selectedFormatted = new Date(selectedDate).toISOString().split('T')[0];

    const narrowedEntries = journalEntries.filter(entry => entry.calendarDate === selectedFormatted)
  
    
    setFilteredEntries(narrowedEntries)
    setIsFiltered(true)
  }

  const clearFilter =() => {
    setIsFiltered(false);
    setSelectedDate('');
  }

  return (
    <div className="filter-wrapper">
      <form onSubmit={(event) => applyFilter(event)}>
        <label htmlFor="date-filter">Find by date:</label>
        <input 
          id="date-filter" 
          type="date" 
          value={selectedDate}
          onChange={handleDateChange}
        />
        <input type="submit" value={"Apply"} />
        <button type="button" onClick={clearFilter}>Clear </button>
      </form>
    </div>
  )
}

export default JournalFilter;