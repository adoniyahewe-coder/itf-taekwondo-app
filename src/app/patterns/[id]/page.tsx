import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const { data: pattern } = await supabase.from('patterns').select('*').eq('order_no', id).single();
  const { data: moves } = await supabase.from('pattern_moves').select('*').eq('pattern_id', pattern?.id).order('move_number', { ascending: true });

  if (!pattern) return <div className="p-20 text-center font-bold">Loading...</div>;

  return (
    <main className="min-h-screen bg-white flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="bg-black p-4 text-white flex items-center justify-between shadow-xl z-50">
        <Link href="/patterns" className="bg-red-700 px-4 py-1.5 rounded-lg font-bold text-xs">← BACK</Link>
        <div className="text-center">
          <h1 className="text-lg font-black uppercase italic leading-none">{pattern.name_en}</h1>
          <p className="text-[9px] text-red-500 font-bold tracking-tighter">{pattern.name_am}</p>
        </div>
        <div className="w-10"></div>
      </nav>

      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        {/* Video Side */}
        <div className="w-full md:w-1/2 bg-black h-[40vh] md:h-full flex items-center justify-center">
          {pattern.video_url ? (
            <video key={pattern.video_url} controls className="w-full h-full object-contain">
              <source src={pattern.video_url} type="video/mp4" />
            </video>
          ) : (
            <p className="text-slate-600 italic">ቪዲዮ አልተጫነም</p>
          )}
        </div>

        {/* Technical Side */}
        <div className="w-full md:w-1/2 overflow-y-auto bg-slate-50 p-6 md:p-10 scrollbar-hide">
          <h2 className="text-2xl font-black border-b-4 border-red-700 inline-block mb-8 italic uppercase">Technical Guide</h2>
          
          <div className="space-y-8 pb-20">
            {moves?.map((m) => (
              <div key={m.id} className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                {m.image_url && (
                  <div className="w-full h-64 bg-white flex items-center justify-center p-6 border-b">
                    <img src={m.image_url} alt="Technique" className="h-full object-contain" />
                  </div>
                )}
                <div className="p-8 border-l-[12px] border-red-700">
                  <span className="bg-black text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">Move {m.move_number}</span>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Stance</p>
                      <p className="font-bold text-slate-900 text-lg">{m.stance_am}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Technique</p>
                      <p className="font-bold text-slate-900 text-lg">{m.technique_am}</p>
                    </div>
                  </div>
                  {m.description_am && <p className="mt-4 pt-4 border-t border-slate-50 text-sm text-slate-600 leading-relaxed font-medium italic">{m.description_am}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}