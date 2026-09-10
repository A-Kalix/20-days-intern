import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Hastane 4.0</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/indicators" className="hover:bg-gray-700 p-2 rounded">Göstergeler</Link>
        <Link to="/models" className="hover:bg-gray-700 p-2 rounded">Modeller</Link>
        <Link to="/languages" className="hover:bg-gray-700 p-2 rounded">Diller & Ülkeler</Link>
      </nav>
    </div>
  );
}