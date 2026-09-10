import React from 'react';

export default function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div className="flex items-center bg-gray-100 rounded px-3 py-1">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500">Profile</button>
      </div>
    </header>
  );
}