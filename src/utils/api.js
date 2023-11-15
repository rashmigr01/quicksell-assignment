import axios from 'axios';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
  try {
    const response = await axios.get(`${API_URL}/tickets`);
    return response.data.tickets;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
