import React, { useState } from 'react';
import LanguageTabs from '../../components/common/LanguageTabs';

export default function IndicatorForm() {
  const [code, setCode] = useState('');
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Gösterge Ekle</h2>
      <LanguageTabs languages={['tr', 'en']} onSelect={(l) => console.log(l)} />
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Kod</label>
          <input value={code} onChange={e => setCode(e.target.value)} type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border" />
          {!code && <span className="text-red-500 text-xs">Bu alan zorunludur.</span>}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Kaydet</button>
      </div>
    </div>
  );
}