"use client"

import React from 'react';
import { DictionarySearch } from '../components/DictionarySearch';
import { SearchResult } from '../components/SearchResult';
import { HistoryModal } from '../components/HistoryModal';
import { useDictionarySearch } from '../hooks/useDictionarySearch';

export function HomeContent() {
  const { result } = useDictionarySearch();
  const [isHistoryModalOpen, setIsHistoryModalOpen] = React.useState(false);

  return (
    <>
      {result && <SearchResult result={result[0]} />}
      <button onClick={() => setIsHistoryModalOpen(true)} className="mt-4 text-blue-500 hover:underline">
        View Search History
      </button>
      <HistoryModal isOpen={isHistoryModalOpen} onClose={() => setIsHistoryModalOpen(false)} />
      <DictionarySearch />
    </>
  );
}