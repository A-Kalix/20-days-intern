import React, { useState } from 'react';

export default function LanguageTabs({ languages, onSelect }) {
  const [active, setActive] = useState(languages[0]);
  return (
    <div className="flex border-b border-gray-200 mb-4">
      {languages.map(l => (
        <button key={l} onClick={() => {setActive(l); onSelect(l);}} className={`py-2 px-4 ${active === l ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}