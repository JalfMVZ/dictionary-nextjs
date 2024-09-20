import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { clearHistory } from '../store/historySlice';
import { Button } from './ui/button';
import { formatDate } from '../utils/formatDate';

export const HistoryModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const history = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-black">Search History</h2>
        <ul className="mb-4 text-black">
          {history.map((entry, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{entry.word}</span> - {formatDate(entry.timestamp)}
            </li>
          ))}
        </ul>
        <div className="flex justify-end space-x-2">
          <Button onClick={() => dispatch(clearHistory())}>Clear History</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};
