import axios from 'axios';

const devRevApi = axios.create({
  baseURL: 'https://api.devrev.ai/v1/',  
  headers: {
    'Authorization': `Bearer thedev-token`,  
  },
});

// Function to update ticket with tags and reasoning
export const updateTicket = async (ticketId: string, tags: string[], reasoning: string) => {
  try {
    const response = await devRevApi.post('/tickets/update', {
      ticketId,
      tags,
      reasoning
    });
    console.log('Ticket updated:', response.data);
  } catch (error) {
    console.error('Error updating ticket:', error);
  }
};
