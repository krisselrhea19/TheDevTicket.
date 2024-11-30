import { analyzeTicketContent } from 'node-nlp';
import { updateTicket } from './devRevApi';

export const processTicket = async (ticketId: string, ticketContent: string) => {

  const { sentiment, tags } = analyzeTicketContent(ticketContent);
  
  let reasoning = 'Ticket classified based on detected keywords.';
  
  if (sentiment < 0) {
    reasoning = 'Ticket appears to describe a problem or error.';
  } else if (tags.includes('feature request')) {
    reasoning = 'Ticket is classified as a feature request based on keywords like "add" and "feature".';
  }

  await updateTicket(ticketId, tags, reasoning);
};
