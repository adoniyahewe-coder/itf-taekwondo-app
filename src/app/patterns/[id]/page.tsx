import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const { data: pattern } = await supabase.from('patterns').select('*').eq('order_no', id).single();
  const { data: moves } = await supabase.from('pattern_moves').select('*').eq('pattern_id', pattern?.id).order('move_number', { ascending: true });

  if (!pattern) return <div className="p-20 text-center font-bold">መረጃው አልተገኘም...</div>;

  return (
    <main className="min-h-screen bg-white flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="bg-red-700 p-4 text-white flex items-center justify-between z-50 shadow-md">
        <Link href="/" className="bg-red-800 px-4 py-2 rounded-lg font-bold text-sm hover:bg-black transition-all">← ተመለስ</Link>
        <div className="text-center">
          <h1 className="text-xl font-black uppercase tracking-tighter">{pattern.name_en}</h1>
          <p className="text-[10px] opacity-90 italic">{pattern.name_am} — {pattern.move_count} እንቅስቃሴዎች</p>
        </div>
        <div className="w-10"></div>
      </nav>

      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        {/* ግራ በኩል፦ ቪዲዮ */}
        <div className="w-full md:w-1/2 bg-black h-[40vh] md:h-full flex items-center justify-center">
          {pattern.video_url ? (
            <video key={pattern.video_url} controls className="w-full h-full object-contain">
              <source src={pattern.video_url} type="video/mp4" />
            </video>
          ) : (
            <p className="text-gray-500 italic">ቪዲዮ አልተጫነም</p>
          )}
        </div>

        {/* ቀኝ በኩል፦ ዝርዝር መመሪያ (All Moves) */}
        <div className="w-full md:w-1/2 overflow-y-auto bg-gray-50 p-4 md:p-8 scrollbar-thin">
          <h2 className="text-2xl font-black text-red-800 border-b-4 border-red-800 inline-block mb-6 uppercase">Technical Manual</h2>
          <div className="space-y-10 pb-32">
            {moves?.map((m) => (
              <div key={m.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="w-full h-64 bg-white flex items-center justify-center p-6 relative border-b">
                   <div className="absolute top-4 left-4 bg-red-700 text-white font-black px-3 py-1 rounded-full text-xs">MOVE {m.move_number}</div>
                   {m.image_url ? (
                     <img src={m.image_url} alt={m.technique_en} className="h-full object-contain" />
                   ) : (
                     <div className="text-gray-200 font-bold italic">ምስል አልተገኘም</div>
                   )}
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 p-3 rounded-xl border-l-4 border-red-700">
                      <p className="text-[10px] text-red-800 font-black uppercase mb-1">Stance (አቋቋም)</p>
                      <p className="font-bold text-gray-900 leading-tight">{m.stance_am}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border-l-4 border-gray-800">
                      <p className="text-[10px] text-gray-800 font-black uppercase mb-1">Technique (ምት)</p>
                      <p className="font-bold text-gray-900 leading-tight">{m.technique_am}</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-3 border-t">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Description (መግለጫ)</p>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{m.description_am}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}