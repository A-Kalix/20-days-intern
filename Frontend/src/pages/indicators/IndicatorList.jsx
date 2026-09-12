import DataTable from '../../components/common/DataTable';

export default function IndicatorList() {
  const cols = [{key: 'code', label: 'Kod'}, {key: 'name', label: 'Gösterge Adı'}, {key: 'status', label: 'Durum'}];
  const data = [{code: 'G01', name: 'Hasta Memnuniyeti', status: 'Aktif'}];
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Göstergeler</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Yeni Ekle</button>
      </div>
      <DataTable columns={cols} data={data} />
    </div>
  );
}