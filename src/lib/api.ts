import { WordEntry } from './types';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export async function fetchWord(word: string): Promise<WordEntry[]> {
  const response = await fetch(`${BASE_URL}/${word}`);
  if (!response.ok) {
    throw new Error('Word not found');
  }
  return response.json();
}