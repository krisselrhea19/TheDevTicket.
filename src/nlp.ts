import { SentimentAnalyzer, PorterStemmer } from 'natural';

// Initialize Sentiment Analyzer
const sentimentAnalyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');

// Function to analyze ticket content and extract keywords
export const analyzeTicketContent = (content: string) => {
  const sentiment = sentimentAnalyzer.getSentiment(content.split(' '));  // Sentiment score of the content
  let tags: string[] = [];

  // Check for keywords indicating specific tags
  if (content.includes('crash') || content.includes('error') || content.includes('bug')) {
    tags.push('bug');
  }
  if (content.includes('feature') || content.includes('add') || content.includes('request')) {
    tags.push('feature request');
  }

  // Add more classification logic as needed (for example, "question", "complaint", etc.)

  return {
    sentiment,
    tags,
  };
};
