import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout';
import AppBeranda from './data/Beranda';
import AppMataKuliah from './data/MataKuliah';
import AppJadwal from './data/Jadwal';
import AppTugas from './data/Tugas';
import AppUjian from './data/Ujian';
import AppAksesibilitas from './data/Aksesibilitas.js';



export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<AppBeranda />} />
        <Route path="matakuliah" element={<AppMataKuliah />} />
        <Route path="jadwal" element={<AppJadwal />} />
        <Route path="tugas" element={<AppTugas />} />
        <Route path="ujian/:jenis" element={<AppUjian />} />
        <Route path="aksesibilitas" element={<AppAksesibilitas />} />
      </Route>
    </Routes>
  );
}
