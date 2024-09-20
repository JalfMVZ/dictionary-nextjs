export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
}

export interface WordEntry {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin?: string;
  meanings: Meaning[];
  sourceUrls?: string[];
}

export interface HistoryEntry {
  word: string;
  timestamp: number;
}

export interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryEntry[]; 
}
