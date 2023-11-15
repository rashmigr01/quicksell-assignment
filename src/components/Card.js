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
        <div class="id">{id}</div>
        <div class="user">{userId}</div>
      </div>
      <div className="card-body">
        <div class="title">{title}</div>
        {/* <span className={`badge badge-${badgeColor[status]}`}>{status}</span> */}
      </div>
      <div className="card-footer">
        <div class="tag">{tag}</div>
        <div class="priority">{priority}</div>
      </div>
    </div>
  );
};

export default Card;