import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch pattern details
  const { data: pattern } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', id)
    .single();

  // Fetch detailed moves (Stances/Punches) for this pattern
  const { data: moves } = await supabase
    .from('pattern_moves')
    .select('*')
    .eq('pattern_id', pattern?.id)
    .order('move_number', { ascending: true });

  if (!pattern) return <div className="p-20 text-center">መረጃው አልተገኘም...</div>;

  return (
    <main className="min-h-screen bg-black flex flex-col h-screen">
      {/* Top Navigation */}
      <nav className="bg-red-800 text-white p-4 flex items-center justify-between shadow-xl">
        <Link href="/" className="bg-red-900 px-4 py-2 rounded-lg font-bold hover:bg-black transition-colors">
          ← ተመለስ
        </Link>
        <div className="text-center">
          <h1 className="text-xl font-black tracking-widest">{pattern.name_en.toUpperCase()}</h1>
          <p className="text-xs opacity-80">{pattern.name_am}</p>
        </div>
        <div className="w-16"></div> {/* Spacer for balance */}
      </nav>

      {/* Main Content: Split Screen */}
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        
        {/* Left Side: Video Player */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative">
          {pattern.video_url ? (
            <iframe 
              className="w-full h-full"
              src={pattern.video_url.replace("watch?v=", "embed/") + "?autoplay=0"}
              title={pattern.name_en}
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-white text-center">
              <p className="text-gray-500 italic">የዚህ ቱል ቪዲዮ አልተገኘም</p>
            </div>
          )}
        </div>

        {/* Right Side: Stances & Technical Breakdown */}
        <div className="w-full md:w-2/5 bg-white overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-red-800">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-red-800 border-b-4 border-red-800 inline-block mb-4">
              TECHNICAL BREAKDOWN
            </h2>
            <p className="text-gray-700 leading-relaxed italic bg-gray-50 p-4 rounded-lg">
              {pattern.meaning_am}
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 bg-black text-white p-2 text-center rounded">
            STANCES & TECHNIQUES (አቋቋም እና ምቶች)
          </h3>

          <div className="space-y-4">
            {moves && moves.length > 0 ? (
              moves.map((m) => (
                <div key={m.id} className="border-l-4 border-red-700 bg-gray-50 p-4 rounded-r-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-red-700">MOVE {m.move_number}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Stance (አቋቋም)</p>
                      <p className="font-bold text-gray-800">{m.stance_am || m.stance_en}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Technique (ምት)</p>
                      <p className="font-bold text-gray-800">{m.technique_am || m.technique_en}</p>
                    </div>
                  </div>
                  {m.description_am && (
                    <p className="mt-2 text-xs text-gray-600 border-t pt-2 italic">
                      {m.description_am}
                    </p>
                  )}
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