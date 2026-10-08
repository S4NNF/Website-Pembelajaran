import { useParams } from 'react-router-dom';

const judul = { kuis: 'Kuis', uts: 'Ujian Tengah Semester', uas: 'Ujian Akhir Semester' };

export default function Ujian() {
  const { jenis } = useParams();
  return (
    <>
      <h4 className="page-title"><i className="bi bi-mortarboard" /> {judul[jenis] ?? 'Ujian Online'}</h4>
      <div className="card-ui p-5 text-center text-secondary">
        Belum ada {judul[jenis]?.toLowerCase() ?? 'ujian'} yang dibuka saat ini.
      </div>
    </>
  );
}
