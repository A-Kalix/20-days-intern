import React, { useState } from 'react';

export default function DetailTree({ data }) {
  const [expanded, setExpanded] = useState(true);
  return <div className="p-4 border rounded shadow-sm bg-white">
    <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
      <span className="font-bold text-lg">{data.name}</span>
      <button className="text-blue-500 text-sm">{expanded ? 'Daralt' : 'Genişlet'}</button>
    </div>
    {expanded && <div className="pl-4 mt-2 border-l-2 border-blue-200">
      {data.children?.map(c => <div key={c.name} className="py-1 flex justify-between"><span>{c.name}</span><button className="text-xs bg-gray-100 px-2 py-1 rounded">Düzenle</button></div>)}
    </div>}
  </div>;
}