import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // 1. የቱሉን ዋና መረጃ መውሰድ
  const { data: pattern } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', parseInt(id))
    .single();

  // 2. በቱሉ ውስጥ ያሉትን ዝርዝር እንቅስቃሴዎች መውሰድ
  const { data: moves } = await supabase
    .from('pattern_moves')
    .select('*')
    .eq('pattern_id', pattern?.id)
    .order('move_number', { ascending: true });

  if (!pattern) {
    return <div className="p-20 text-center">መረጃው አልተገኘም...</div>;
  }

  return (
    <main className="min-h-screen bg-black flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="bg-red-800 text-white p-4 flex items-center justify-between shadow-xl z-20">
        <Link href="/" className="bg-red-900 px-4 py-2 rounded-lg font-bold hover:bg-black transition-all">
          ← ተመለስ
        </Link>
        <div className="text-center">
          <h1 className="text-xl font-black tracking-widest uppercase italic">{pattern.name_en}</h1>
          <p className="text-xs opacity-80">{pattern.name_am}</p>
        </div>
        <div className="w-16"></div>
      </nav>

      {/* Split Screen Layout */}
      <div className="flex flex-col md:flex-row flex-grow">
        
        {/* Left Side: Video Player */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative">
          {pattern.video_url ? (
            <iframe 
              className="w-full h-full aspect-video shadow-2xl"
              src={pattern.video_url.replace("watch?v=", "embed/")}
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-gray-500 text-center p-10">
              <p className="text-xl italic">ቪዲዮ አልተገኘም</p>
            </div>
          )}
        </div>

        {/* Right Side: Techniques & Stances */}
        <div className="w-full md:w-2/5 bg-white overflow-y-auto p-6 border-l-4 border-red-800 scrollbar-thin">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-red-800 border-b-4 border-red-800 inline-block mb-4">
              TECHNICAL BREAKDOWN
            </h2>
            <p className="text-gray-700 leading-relaxed italic bg-gray-50 p-4 rounded-lg shadow-inner">
              {pattern.meaning_am}
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 bg-black text-white p-2 text-center rounded">
            STANCES & TECHNIQUES (አቋቋም እና ምቶች)
          </h3>

          {/* List of Moves */}
          <div className="space-y-6">
            {moves && moves.length > 0 ? (
              moves.map((m) => (
                <div key={m.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                  {/* Technique Image if exists */}
                  {m.image_url && (
                    <div className="w-full h-48 bg-white flex items-center justify-center p-4 border-b">
                      <img src={m.image_url} alt={m.technique_en} className="h-full object-contain" />
                    </div>
                  )}
                  
                  <div className="p-4 border-l-8 border-red-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-black text-red-700 text-sm">MOVE {m.move_number}</span>
                    </div>
                    <p className="font-bold text-gray-900 text-lg">{m.stance_am} ({m.stance_en})</p>
                    <p className="text-gray-700 font-semibold">{m.technique_am} ({m.technique_en})</p>
                    {m.description_am && (
                      <p className="text-xs text-gray-500 mt-3 italic border-t pt-2">{m.description_am}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-400">
                <p>የእንቅስቃሴ ዝርዝር መረጃዎች በቅርቡ ይጨመራሉ...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}