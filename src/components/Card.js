// src/components/Card.js
import React from 'react';
import "./Card.css";

const Card = ({ ticket }) => {
  const { id, title, tag, userId, status, priority } = ticket;

  const badgeColor = {
    "Todo": 'secondary',
    "In progress": 'primary',
    "Backlog": 'warning',
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>{title}</h4>
        <span className={`badge badge-${badgeColor[status]}`}>{status}</span>
      </div>
      <div className="card-body">
        <p>ID: {id}</p>
        <p>Tags: {tag.join(', ')}</p>
        <p>Assigned to: {userId}</p>
        <p>Priority: {priority}</p>
      </div>
    </div>
  );
};

export default Card;