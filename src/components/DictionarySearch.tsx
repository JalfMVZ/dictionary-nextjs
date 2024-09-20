"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./ui/input";
import { useDictionarySearch } from "../hooks/useDictionarySearch";
import { addToHistory } from "../store/historySlice";
import { SearchResult } from "./SearchResult";
import { Search } from "lucide-react";

export const DictionarySearch: React.FC = () => {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const { search, error, result } = useDictionarySearch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!word.trim()) return;
    const result = await search(word);
    if (result) {
      dispatch(addToHistory({ word, timestamp: Date.now() }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="mt-8 mb-8">
        <div className="relative">
          <Input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Search for any word..."
            className="w-full py-3 pl-4 pr-12 rounded-2xl bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-purple-500"
          />
          <div
            onClick={handleSubmit}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer"
          >
            <Search className="w-6 h-6 text-purple-500" />
          </div>
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {result && <SearchResult result={result[0]} />}
    </div>
  );
};
