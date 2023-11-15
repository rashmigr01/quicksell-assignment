import React, { useState, useEffect } from 'react';
import Card from './Card';
import Filter from './Filter';
import Header from './Header';
import { fetchData } from '../utils/api';
import './Board.css';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [groupedAndSortedTickets, setGroupedAndSortedTickets] = useState([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
        try {
            const data = await fetchData();
            console.log('Data:', data);
            setTickets(data.tickets || []);
            setUsers(data.users || []);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };

    fetchAndSetData();
  }, []);

  useEffect(() => {
    groupAndSortTickets();
  }, [tickets, groupBy, sortOption]);

  const groupAndSortTickets = () => {
    if (!tickets || tickets.length === 0) {
        return;
      }
    const groupedTickets = groupBy === 'status'
      ? tickets.reduce((acc, ticket) => {
          const key = ticket.status;
          acc[key] = [...(acc[key] || []), ticket];
          return acc;
        }, {})
      : groupBy === 'user'
      ? tickets.reduce((acc, ticket) => {
          const key = ticket.userId;
          acc[key] = [...(acc[key] || []), ticket];
          return acc;
        }, {})
      : groupBy === 'priority'
      ? tickets.reduce((acc, ticket) => {
          const key = ticket.priority;
          acc[key] = [...(acc[key] || []), ticket];
          return acc;
        }, {})
      : {};

    const sortedAndGroupedTickets = Object.keys(groupedTickets).map((key) => ({
      group: key,
      tickets: groupedTickets[key].sort((a, b) => {
        if (sortOption === 'priority') {
          return b.priority - a.priority;
        } else if (sortOption === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      }),
    }));

    setGroupedAndSortedTickets(sortedAndGroupedTickets);
  };

  return (
    <div className="board">
      <Header setGroupBy={setGroupBy} setSortOption={setSortOption} />
      <Filter setGroupBy={setGroupBy} setSortOption={setSortOption} />
      <div className="cards-container">
      {groupedAndSortedTickets.map((group) => (
          <div key={group.group}>
            <h2>{group.group}</h2>
            {group.tickets.map((ticket) => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
