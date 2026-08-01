import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: pattern } = await supabase.from('patterns').select('*').eq('order_no', id).single();

  if (!pattern) return <div className="p-10 text-center">መረጃው አልተገኘም...</div>;

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-red-700 p-4 text-white flex items-center shadow-md">
        <Link href="/" className="mr-4 font-bold p-2 bg-red-800 rounded">← ተመለስ</Link>
        <h1 className="text-xl font-bold">{pattern.name_en} ({pattern.name_am})</h1>
      </div>

      <div className="flex flex-col md:row h-[calc(100vh-72px)]">
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
          {pattern.video_url ? (
            <iframe className="w-full aspect-video" src={pattern.video_url.replace("watch?v=", "embed/")} allowFullScreen></iframe>
          ) : (
            <div className="text-white text-center p-10">የቪዲዮ ሊንክ አልተገኘም</div>
          )}
        </div>
        <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-gray-50">
          <h2 className="text-3xl font-bold text-red-700 mb-4 underline">Technical Description</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{pattern.meaning_am}</p>
          <div className="mt-6 p-4 bg-white border-l-4 border-red-700 shadow-sm">
            <p className="font-bold">የእንቅስቃሴ ብዛት (Moves): {pattern.move_count}</p>
          </div>
        </div>
      </div>
    </main>
  );
}