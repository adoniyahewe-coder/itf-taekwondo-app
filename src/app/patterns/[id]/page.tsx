import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

// Next.js 15 params must be a Promise
export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 1. የቱሉን መረጃ መውሰድ
  const { data: pattern, error: patternError } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', parseInt(id))
    .single();

  // 2. በቱሉ ውስጥ ያሉትን እንቅስቃሴዎች (Moves) መውሰድ
  const { data: moves } = await supabase
    .from('pattern_moves')
    .select('*')
    .eq('pattern_id', pattern?.id)
    .order('move_number', { ascending: true });

  if (patternError || !pattern) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h2 className="text-xl font-bold mb-4">መረጃው አልተገኘም</h2>
        <Link href="/patterns" className="bg-red-700 px-6 py-2 rounded-full uppercase text-xs font-black">Back to Patterns</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col h-screen overflow-hidden">
      {/* Top Navbar */}
      <nav className="bg-[#0a0a0a] text-white p-4 flex items-center justify-between z-50 shadow-2xl">
        <Link href="/patterns" className="bg-red-700 px-4 py-2 rounded-xl font-bold text-xs hover:bg-white hover:text-black transition-all">
          ← BACK
        </Link>
        <div className="text-center">
          <h1 className="text-xl font-black uppercase italic tracking-widest">{pattern.name_en}</h1>
          <p className="text-[10px] text-red-500 font-bold tracking-tighter uppercase">{pattern.name_am}</p>
        </div>
        <div className="w-10"></div>
      </nav>

      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        
        {/* LEFT SIDE: VIDEO PLAYER */}
        <div className="w-full md:w-1/2 bg-black h-[40vh] md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
          {pattern.video_url ? (
            <video key={pattern.video_url} controls className="w-full h-full object-contain">
              <source src={pattern.video_url} type="video/mp4" />
            </video>
          ) : (
            <div className="text-gray-600 italic animate-pulse">ቪዲዮ አልተጫነም...</div>
          )}
        </div>

        {/* RIGHT SIDE: TECHNICAL STEPS */}
        <div className="w-full md:w-1/2 overflow-y-auto bg-gray-50 p-6 md:p-10 scrollbar-thin">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-black border-b-4 border-red-700 inline-block mb-4 italic">TECHNICAL MANUAL</h2>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 italic text-gray-700 leading-relaxed text-sm">
              <span className="font-bold text-red-700 block not-italic mb-1">ትርጉም (Meaning):</span>
              {pattern.meaning_am}
            </div>
          </div>
          
          <div className="space-y-8 pb-20">
            {moves?.map((m) => (
              <div key={m.id} className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden group hover:border-red-500 transition-all">
                {m.image_url && (
                  <div className="w-full h-64 bg-white flex items-center justify-center p-4 border-b">
                    <img src={m.image_url} alt={m.technique_en} className="h-full object-contain" />
                  </div>
                )}
                <div className="p-6 border-l-[12px] border-red-700">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Move {m.move_number}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Stance (አቋቋም)</p>
                      <p className="font-bold text-black text-lg">{m.stance_am}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Technique (ምት)</p>
                      <p className="font-bold text-black text-lg">{m.technique_am}</p>
                    </div>
                  </div>
                  {m.description_am && (
                    <p className="mt-4 pt-4 border-t border-gray-50 text-xs text-gray-500 leading-relaxed font-medium italic">
                      {m.description_am}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}