import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const { data: pattern } = await supabase.from('patterns').select('*').eq('order_no', id).single();
  const { data: moves } = await supabase.from('pattern_moves').select('*').eq('pattern_id', pattern?.id).order('move_number', { ascending: true });

  if (!pattern) return <div className="p-20 text-center">መረጃው አልተገኘም...</div>;

  return (
    <main className="min-h-screen bg-black flex flex-col h-screen overflow-hidden">
      <nav className="bg-red-700 p-4 text-white flex items-center z-50 shadow-xl">
        <Link href="/" className="bg-red-800 px-4 py-2 rounded font-bold mr-4 text-sm hover:bg-black transition-all">
          ← ተመለስ
        </Link>
        <div className="flex flex-col">
          <h1 className="text-lg font-black uppercase tracking-tighter leading-tight">{pattern.name_en}</h1>
          <p className="text-[10px] opacity-80 italic">{pattern.name_am}</p>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        
        {/* VIDEO PLAYER SIDE (NOW FOR UPLOADED FILES) */}
        <div className="w-full md:w-3/5 bg-black h-[40vh] md:h-full flex items-center justify-center">
          {pattern.video_url ? (
            <video 
              key={pattern.video_url} 
              controls 
              controlsList="nodownload"
              className="w-full h-full object-contain"
            >
              <source src={pattern.video_url} type="video/mp4" />
              የእርስዎ ብሮውዘር ቪዲዮውን ማሳየት አልቻለም።
            </video>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500 italic">ቪዲዮ አልተጫነም</div>
          )}
        </div>

        {/* DESCRIPTION SIDE */}
        <div className="w-full md:w-2/5 p-6 overflow-y-auto bg-white border-l-4 border-red-700 shadow-2xl">
          <h2 className="text-xl font-black text-red-800 mb-4 uppercase tracking-tighter">Technical Breakdown</h2>
          <div className="bg-gray-50 p-4 rounded-xl mb-6 shadow-inner italic text-gray-700">
            {pattern.meaning_am}
          </div>
          
          <h3 className="text-sm font-bold bg-black text-white p-2 mb-4 rounded text-center">STANCES & TECHNIQUES</h3>
          
          <div className="space-y-4 pb-20">
            {moves?.map((m) => (
              <div key={m.id} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-600 border-r border-t border-b border-gray-100">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Move {m.move_number}</span>
                <p className="font-bold text-gray-900 leading-tight">{m.stance_am} ({m.stance_en})</p>
                <p className="text-gray-700 text-sm font-medium">{m.technique_am}</p>
                {m.description_am && <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">{m.description_am}</p>}
              </div>
            ))}
            {(!moves || moves.length === 0) && (
                <p className="text-center text-gray-400 italic py-10">ዝርዝር መረጃዎች በቅርቡ ይጨመራሉ...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}