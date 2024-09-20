import React from "react";

interface SearchHistoryProps {
  history: { word: string; timestamp: number }[];
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Historial de Búsqueda</h2>
      {history.length === 0 ? (
        <p>No hay historial de búsquedas.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index} className="py-2 border-b last:border-b-0">
              {item.word} - {new Date(item.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistory;
