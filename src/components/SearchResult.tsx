"use client";
import React from "react";
import { WordEntry } from "../lib/types";
import { Play } from "lucide-react";

interface SearchResultProps {
  result: WordEntry;
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const playAudio = (audioUrl: string) => {
    new Audio(audioUrl).play();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-bold">{result.word}</h2>
          <p className="text-xl text-purple-500 mt-2">{result.phonetic}</p>
        </div>
        {result.phonetics.find(p => p.audio) && (
          <button
            onClick={() => playAudio(result.phonetics.find(p => p.audio)!.audio!)}
            className="bg-purple-100 rounded-full p-4 hover:bg-purple-200 transition-colors"
          >
            <Play className="w-6 h-6 text-purple-600" />
          </button>
        )}
      </div>

      {result.meanings.map((meaning, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold italic">{meaning.partOfSpeech}</h3>
            <div className="flex-grow ml-4 h-px bg-gray-300 dark:bg-gray-600"></div>
          </div>
          
          <div>
            <h4 className="text-xl text-gray-500 mb-4">Meaning</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              {meaning.definitions.map((def, idx) => (
                <li key={idx} className="text-gray-700">
                  {def.definition}
                  {def.example && (
                    <p className="text-gray-500 italic mt-2">&ldquo;{def.example}&rdquo;</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xl text-gray-500 inline mr-4">Synonyms</h4>
              <span className="text-purple-500 font-bold">{meaning.synonyms.join(", ")}</span>
            </div>
          )}
        </div>
      ))}

      {result.sourceUrls && result.sourceUrls.length > 0 && (
        <div className="pt-4 mt-8 border-t border-gray-300 dark:border-gray-600">
          <p className="text-gray-500">
            Source:{" "}
            <a href={result.sourceUrls[0]} className="underline" target="_blank" rel="noopener noreferrer">
              {result.sourceUrls[0]}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};