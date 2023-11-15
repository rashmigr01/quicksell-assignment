const BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data || { tickets: [], users: [] };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
