import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // 1. የቱሉን ዋና መረጃ መውሰድ (ቪዲዮውን ጨምሮ)
  const { data: pattern } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', parseInt(id))
    .single();
  
  // 2. በቱሉ ውስጥ ያሉትን ዝርዝር እንቅስቃሴዎች (Moves) መውሰድ
  const { data: moves } = await supabase
    .from('pattern_moves')
    .select('*')
    .eq('pattern_id', pattern?.id)
    .order('move_number', { ascending: true });

  if (!pattern) return (
    <div className="p-20 text-center bg-gray-100 min-h-screen">
      <p className="text-xl font-bold">መረጃው አልተገኘም...</p>
      <Link href="/" className="text-red-600 underline mt-4 inline-block">ወደ ዋና ገጽ ተመለስ</Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-white flex flex-col h-screen overflow-hidden font-sans">
      {/* የላይኛው መክፈቻ (Navigation Bar) */}
      <nav className="bg-red-700 p-4 text-white flex items-center justify-between z-50 shadow-lg">
        <Link href="/" className="bg-red-800 px-4 py-2 rounded-lg font-bold text-sm hover:bg-black transition-all">
          ← ተመለስ
        </Link>
        <div className="text-center">
          <h1 className="text-xl font-black uppercase tracking-tighter">{pattern.name_en}</h1>
          <p className="text-[10px] opacity-90 italic font-medium">{pattern.name_am} — {pattern.move_count} እንቅስቃሴዎች</p>
        </div>
        <div className="w-10"></div>
      </nav>

      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        
        {/* ግራ በኩል (ወይም በላይ በኩል በስልክ): ቪዲዮ ማጫወቻ */}
        <div className="w-full md:w-1/2 bg-black h-[35vh] md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-900 shadow-2xl">
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
            <div className="text-gray-500 text-center p-10">
              <p className="text-lg italic">ቪዲዮው አልተጫነም</p>
            </div>
          )}
        </div>

        {/* ቀኝ በኩል: የእንቅስቃሴዎች ዝርዝር (Manual) */}
        <div className="w-full md:w-1/2 overflow-y-auto bg-gray-50 p-4 md:p-8 scrollbar-thin">
          <header className="mb-8">
            <h2 className="text-2xl font-black text-red-800 border-b-4 border-red-800 inline-block mb-3 uppercase tracking-tighter">
              Technical Manual (የአፈፃፀም መመሪያ)
            </h2>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 italic text-gray-700 leading-relaxed text-sm">
              <span className="font-bold text-red-700 block mb-1">ትርጉም (Meaning):</span>
              {pattern.meaning_am}
            </div>
          </header>
          
          <h3 className="text-[10px] font-bold bg-black text-white p-3 mb-8 rounded-lg shadow-lg text-center tracking-[0.3em] uppercase">
            Detailed Movements (ዝርዝር እንቅስቃሴዎች)
          </h3>
          
          {/* Loop through each move */}
          <div className="space-y-12 pb-32">
            {moves?.map((m) => (
              <div key={m.id} className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden transition-all hover:border-red-500">
                
                {/* 1. የቴክኒኩ ምስል */}
                <div className="w-full h-72 bg-white flex items-center justify-center p-6 relative border-b border-gray-50">
                   <div className="absolute top-4 left-4 bg-red-700 text-white font-black px-4 py-1 rounded-full text-xs shadow-md">
                     MOVE {m.move_number}
                   </div>
                   {m.image_url ? (
                     <img 
                        src={m.image_url} 
                        alt={m.technique_en} 
                        className="h-full object-contain" 
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
                     />
                   ) : (
                     <div className="text-gray-200 font-bold text-3xl opacity-20 uppercase tracking-widest text-center">
                        IMAGE AREA<br/><span className="text-xs">ምስል አልተገኘም</span>
                     </div>
                   )}
                </div>

                {/* 2. ዝርዝር መረጃ (Stance & Technique) */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* አቋቋም (Stance) */}
                    <div className="bg-red-50 p-4 rounded-2xl border-l-4 border-red-700">
                      <p className="text-[10px] text-red-800 font-black uppercase mb-1 tracking-widest">Stance (አቋቋም)</p>
                      <p className="font-bold text-gray-900 text-lg leading-tight">{m.stance_am}</p>
                      <p className="text-[10px] text-gray-500 italic font-medium">{m.stance_en}</p>
                    </div>
                    {/* ቴክኒክ (Technique) */}
                    <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-gray-800">
                      <p className="text-[10px] text-gray-800 font-black uppercase mb-1 tracking-widest">Technique (ምት)</p>
                      <p className="font-bold text-gray-900 text-lg leading-tight">{m.technique_am}</p>
                      <p className="text-[10px] text-gray-500 italic font-medium">{m.technique_en}</p>
                    </div>
                  </div>

                  {/* 3. የአማርኛ መግለጫ */}
                  <div className="mt-2 pt-4 border-t border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Description (መግለጫ)</p>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {m.description_am}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {(!moves || moves.length === 0) && (
              <div className="text-center py-24 bg-white rounded-3xl border-4 border-dashed border-gray-100">
                <p className="text-gray-300 font-bold italic">የቴክኒክ ዝርዝሮች በቅርቡ ይጨመራሉ...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}