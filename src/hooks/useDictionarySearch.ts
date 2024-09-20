"use client"

import { useState } from 'react';
import { fetchWord } from '../lib/api';
import { WordEntry } from '../lib/types';

export const useDictionarySearch = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [result, setResult] = useState<WordEntry[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (word: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchWord(word);
      setResult(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { search, setSearchTerm, searchTerm, result, isLoading, error }; 
};
