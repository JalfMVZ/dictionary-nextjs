import React from "react";
import { FontSelector } from "./FontSelector";
import { ModeToggle } from "./ThemeToggle";
import { Book } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <Book className="w-8 h-8" />
      <div className="flex items-center space-x-4">
        <FontSelector />
        <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
        <ModeToggle />
      </div>
    </header>
  );
};
