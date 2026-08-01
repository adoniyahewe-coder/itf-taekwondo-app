import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  // 1. Wait for the ID from the URL
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 2. Fetch the specific pattern from Supabase
  const { data: pattern, error } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', parseInt(id))
    .single();

  // 3. Fetch the specific moves for this pattern
  const { data: moves } = await supabase
    .from('pattern_moves')
    .select('*')
    .eq('pattern_id', pattern?.id)
    .order('move_number', { ascending: true });

  // Error handling if data is missing
  if (error || !pattern) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <p className="text-xl mb-4 italic text-red-500">መረጃው አልተገኘም (Data Not Found)</p>
        <Link href="/" className="bg-white text-black px-6 py-2 rounded-full font-bold">ወደ ዋና ገጽ ተመለስ</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black flex flex-col h-screen">
      {/* Top Navigation Bar */}
      <nav className="bg-red-800 text-white p-4 flex items-center justify-between shadow-xl">
        <Link href="/" className="bg-red-900 px-4 py-2 rounded-lg font-bold hover:bg-black transition-all">
          ← ተመለስ
        </Link>
        <div className="text-center">
          <h1 className="text-xl font-black tracking-widest">{pattern.name_en.toUpperCase()}</h1>
          <p className="text-xs opacity-80 italic">{pattern.name_am}</p>
        </div>
        <div className="w-16"></div> 
      </nav>

      {/* Split Screen Container */}
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        
        {/* Left Side: Video Player */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative">
          {pattern.video_url ? (
            <iframe 
              className="w-full h-full aspect-video"
              src={pattern.video_url.replace("watch?v=", "embed/")}
              title={pattern.name_en}
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-gray-500 italic">ቪዲዮ አልተገኘም</div>
          )}
        </div>

        {/* Right Side: Technical Breakdown */}
        <div className="w-full md:w-2/5 bg-white overflow-y-auto p-6 border-l-4 border-red-800">
          <h2 className="text-2xl font-black text-red-800 border-b-2 border-red-100 mb-4 pb-2">
            TECHNICAL DESCRIPTION
          </h2>
          <p className="text-gray-700 leading-relaxed italic bg-gray-50 p-4 rounded-lg mb-6 shadow-inner">
            {pattern.meaning_am}
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-4 bg-black text-white p-2 text-center rounded">
            STANCES & TECHNIQUES (አቋቋም እና ምቶች)
          </h3>

          {/* List of Moves */}
          <div className="space-y-4">
            {moves && moves.length > 0 ? (
              moves.map((m) => (
                <div key={m.id} className="border-l-4 border-red-700 bg-gray-50 p-4 rounded shadow-sm">
                  <span className="font-black text-red-700 text-sm">MOVE {m.move_number}</span>
                  <p className="font-bold text-gray-800 mt-1">{m.stance_am} ({m.stance_en})</p>
                  <p className="text-gray-700 font-semibold">{m.technique_am}</p>
                  {m.description_am && <p className="text-xs text-gray-500 mt-2 italic">{m.description_am}</p>}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 py-10 italic">የእንቅስቃሴ ዝርዝር መረጃዎች በቅርቡ ይጨመራሉ...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}