import { processTicket } from './ticketProcessor';

// This function is called when a ticket is received
export const onTicketReceived = async (ticketId: string, ticketContent: string) => {
  try {
    // Process the ticket by classifying and tagging it
    await processTicket(ticketId, ticketContent);
  } catch (error) {
    console.error('Error processing ticket:', error);
  }
};

// Example: Simulate a ticket received (in real life, this would be a webhook call or API request)
onTicketReceived('123456', 'I am experiencing a crash when clicking the button!');
