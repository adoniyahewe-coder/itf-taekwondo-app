import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

// Next.js 15 requires params to be a Promise
export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // 1. Await the params to get the ID from the URL
  const resolvedParams = await params;
  const patternId = resolvedParams.id;

  // 2. Fetch data using the order_no (1, 2, 3...)
  const { data: pattern, error } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', parseInt(patternId))
    .single();

  // If Supabase can't find it, show exactly what ID it was looking for
  if (error || !pattern) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl font-bold text-red-500">መረጃው አልተገኘም!</h1>
        <p className="text-gray-400 mt-2">የፈለግነው ቁጥር (ID): {patternId}</p>
        <Link href="/" className="mt-6 underline text-blue-400">ወደ ኋላ ተመለስ</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black flex flex-col h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="bg-red-800 text-white p-4 flex items-center justify-between shadow-xl z-10">
        <Link href="/" className="bg-red-900 px-4 py-2 rounded font-bold hover:bg-black transition-all">
          ← ተመለስ
        </Link>
        <div className="text-center">
          <h1 className="text-xl font-black tracking-widest uppercase">{pattern.name_en}</h1>
          <p className="text-xs opacity-75">{pattern.name_am}</p>
        </div>
        <div className="w-10"></div>
      </nav>

      {/* Layout Split */}
      <div className="flex flex-col md:flex-row flex-grow">
        
        {/* VIDEO SIDE (Left/Top) */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-800">
          {pattern.video_url ? (
            <iframe 
              className="w-full h-full aspect-video"
              src={pattern.video_url.replace("watch?v=", "embed/")}
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-gray-500 italic">ቪዲዮ አልተገኘም</p>
          )}
        </div>

        {/* DESCRIPTION SIDE (Right/Bottom) */}
        <div className="w-full md:w-2/5 bg-white overflow-y-auto p-6 scrollbar-thin">
          <h2 className="text-2xl font-black text-red-800 border-b-4 border-red-800 inline-block mb-4">
            TECHNICAL DESCRIPTION
          </h2>
          <div className="bg-gray-50 p-5 rounded-xl shadow-inner mb-6">
            <p className="text-gray-800 text-lg leading-relaxed italic">
              {pattern.meaning_am}
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-8 border-red-800 rounded-r-lg">
            <p className="text-xl font-bold text-gray-900">Move Count: {pattern.move_count}</p>
            <p className="text-sm text-gray-600 mt-2 italic">የእንቅስቃሴ ዝርዝሮች (Stances/Punches) በቅርቡ እዚህ ይጨመራሉ...</p>
          </div>
        </div>
      </div>
    </main>
  );
}