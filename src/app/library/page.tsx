import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Library() {
  // Fetch all techniques from your library table
  const { data: techs } = await supabase.from('technique_library').select('*').order('category');

  return (
    <main className="min-h-screen bg-gray-50 pb-20 font-sans">
      <nav className="bg-black p-5 text-white flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="bg-red-700 px-4 py-2 rounded-xl font-bold text-xs">← HOME</Link>
        <h1 className="text-xl font-black italic tracking-widest uppercase">Library</h1>
        <div className="w-10"></div>
      </nav>

      <div className="max-w-5xl mx-auto p-6">
        <p className="text-gray-400 italic mb-12 text-center text-sm">መሰረታዊ የቴኳንዶ እንቅስቃሴዎች እና አቋቋሞች</p>

        {['Stance', 'Punch', 'Block', 'Kick'].map((cat) => (
          <div key={cat} className="mb-20">
            <h2 className="text-3xl font-black text-black border-b-4 border-red-700 inline-block mb-8 uppercase italic tracking-tighter">
              {cat}s
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techs?.filter(t => t.category === cat).map((item) => (
                <div key={item.id} className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden hover:scale-105 transition-all">
                  <div className="h-40 bg-white flex items-center justify-center p-4">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.name_en} className="h-full object-contain" />
                    ) : (
                      <div className="text-gray-200 text-[10px] uppercase font-bold italic tracking-widest">No Image</div>
                    )}
                  </div>
                  <div className="p-4 bg-gray-900 text-white text-center">
                    <h4 className="font-bold text-sm leading-none">{item.name_am}</h4>
                    <p className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-tighter">{item.name_en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}