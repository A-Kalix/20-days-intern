import React from 'react';
import LanguageTabs from '../../components/common/LanguageTabs';

export default function IndicatorForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Gösterge Ekle</h2>
      <LanguageTabs languages={['tr', 'en']} onSelect={(l) => console.log(l)} />
      <div className="space-y-4">
        <div><label className="block text-sm font-medium text-gray-700">Kod</label><input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border" /></div>
        <div><label className="block text-sm font-medium text-gray-700">Ad</label><input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border" /></div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Kaydet</button>
      </div>
    </div>
  );
}