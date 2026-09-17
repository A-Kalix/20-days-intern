import React, { useState } from 'react';
import LanguageTabs from '../../components/common/LanguageTabs';

export default function IndicatorForm() {
  const [ansType, setAnsType] = useState('binary');
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Gösterge Ekle</h2>
      <LanguageTabs languages={['tr', 'en']} onSelect={(l) => console.log(l)} />
      <div className="space-y-4">
        <div><label className="block text-sm font-medium text-gray-700">Cevap Türü</label>
        <select value={ansType} onChange={e => setAnsType(e.target.value)} className="mt-1 block w-full p-2 border rounded"><option value="binary">İkili (Evet/Hayır)</option><option value="likert">Likert (1-5)</option></select></div>
        {ansType === 'likert' && <div className="p-4 bg-gray-50 rounded text-sm text-gray-600">Likert skalası için etiketleri giriniz (Örn: Çok Kötü, Kötü...)</div>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Kaydet</button>
      </div>
    </div>
  );
}