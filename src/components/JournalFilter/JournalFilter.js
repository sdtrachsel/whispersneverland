import React, { useState } from "react";
import "./JournalFilter.css";
import PropTypes from 'prop-types';

const JournalFilter = ({ journalEntries, setFilteredEntries, setIsFiltered }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  }

  const applyFilter = (event) => {
    event.preventDefault()
    const selectedFormatted = new Date(selectedDate).toISOString().split('T')[0];
    const narrowedEntries = journalEntries.filter(entry => entry.calendarDate === selectedFormatted);

    setFilteredEntries(narrowedEntries)
    setIsFiltered(true)
  }

  const clearFilter = () => {
    setIsFiltered(false);
    setSelectedDate('');
  }

  return (
    <div className="filter-wrapper">
      <form className="image-form" onSubmit={(event) => applyFilter(event)}>
        <label htmlFor="date-filter">Find by date:</label>
        <input
          id="date-filter"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <input className="filter-btn" type="submit" value={"Apply"} disabled={!selectedDate} />
        <button className="clear-btn" type="button" onClick={clearFilter}>Clear </button>
      </form>
    </div>
  )
}

JournalFilter.propTypes = {
  journalEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilteredEntries: PropTypes.func.isRequired,
  setIsFiltered: PropTypes.func.isRequired
};

export default JournalFilter;