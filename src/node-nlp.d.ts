declare module 'node-nlp' {
    export function analyzeTicketContent(content: string): { sentiment: number, tags: string[] };
  }
  