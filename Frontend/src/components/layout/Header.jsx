import React from 'react';

export default function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 dark:bg-gray-800 dark:text-white">
      <div className="flex items-center bg-gray-100 rounded px-3 py-1 dark:bg-gray-700">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none dark:text-white" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-blue-500 dark:text-gray-300">Tema Değiştir</button>
        <button className="text-gray-500 dark:text-gray-300">Profil</button>
      </div>
    </header>
  );
}