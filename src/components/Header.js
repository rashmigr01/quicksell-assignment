import React, { useState } from 'react';
import './Header.css';

const Header = ({ setGroupBy, setSortOption }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const toggleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
    toggleDisplayDropdown();
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    toggleDisplayDropdown();
  };

  return (
    <div className="header">
      <div className="menu-button" onClick={toggleDisplayDropdown}>
        Display
        {displayDropdown && (
          <div className="dropdown">
            <label htmlFor="groupBy">Grouping:</label>
            <select id="groupBy" onChange={handleGroupByChange}>
              <option value="status">Status</option>
              <option value="user">Users</option>
              <option value="priority">Priority</option>
            </select>
            <label htmlFor="sortOption">Ordering:</label>
            <select id="sortOption" onChange={handleSortOptionChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
