import React from 'react';

export default function DetailTree({ data }) {
  return <div className="p-4 border rounded shadow-sm bg-white">
    <div className="font-bold text-lg">{data.name}</div>
    <div className="pl-4 mt-2 border-l-2 border-blue-200">
      {data.children?.map(c => <div key={c.name} className="py-1">{c.name}</div>)}
    </div>
  </div>;
}