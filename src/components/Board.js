import React, { useState, useEffect } from 'react';
import Card from './Card';
import Filter from './Filter';
import Header from './Header';
import { fetchTickets, fetchUsers } from '../utils/api';
import './Board.css';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const ticketsData = await fetchTickets();
        const usersData = await fetchUsers();
        setTickets(ticketsData);
        setUsers(usersData);
      } catch (error) {
        // Handle error, e.g., show a message to the user
      }
    };

    fetchAndSetData();
  }, []);

  const groupAndSortTickets = () => {
    // Implement logic to group and sort tickets based on groupBy and sortOption
    // Update the state with the sorted and grouped tickets
  };

  return (
    <div className="board">
      <Header setGroupBy={setGroupBy} setSortOption={setSortOption} />
      <Filter setGroupBy={setGroupBy} setSortOption={setSortOption} />
      <div className="cards-container">
        {/* Map through tickets and render Card components */}
      </div>
    </div>
  );
};

export default Board;
