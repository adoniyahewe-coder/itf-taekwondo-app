import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // ዳታውን ከ Supabase መውሰድ
  const { data: pattern } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', id)
    .single();

  if (!pattern) return <div className="p-10 text-center">መረጃው አልተገኘም...</div>;

  return (
    <main className="min-h-screen bg-white">
      {/* ራስጌ (Header) */}
      <div className="bg-red-700 p-4 text-white flex items-center shadow-md">
        <Link href="/" className="mr-4 font-bold p-2 bg-red-800 rounded">← ተመለስ</Link>
        <h1 className="text-xl font-bold">{pattern.name_en} ({pattern.name_am})</h1>
      </div>

      {/* ገጹን ለሁለት መክፈል */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-72px)]">
        
        {/* ግራ በኩል - ቪዲዮ (Video) */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center border-b md:border-b-0 md:border-r">
          {pattern.video_url ? (
            <iframe 
              className="w-full h-full aspect-video"
              src={pattern.video_url.replace("watch?v=", "embed/")}
              title={pattern.name_en}
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-white text-center p-10">
              <p className="text-xl">የዚህ ቱል ቪዲዮ በቅርቡ ይጨመራል</p>
            </div>
          )}
        </div>

        {/* ቀኝ በኩል - መግለጫ (Description) */}
        <div className="w-full md:w-1/2 overflow-y-auto p-8 bg-gray-50">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-red-700 mb-4 italic underline">Technical Description</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">ትርጉም (Meaning)</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {pattern.meaning_am}
              </p>
            </div>

            <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-700">
              <h3 className="font-bold text-red-900 mb-2">ተጨማሪ መረጃ</h3>
              <p className="text-gray-800 font-semibold italic">የእንቅስቃሴ ብዛት (Moves): {pattern.move_count}</p>
              <p className="text-sm text-gray-600 mt-2 italic">ለእያንዳንዱ አቋቋም (Stance) እና ምት (Punch) ዝርዝር መረጃ በቅርቡ ይጨመራል...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}