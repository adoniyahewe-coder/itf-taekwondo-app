import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternDetail({ params }: { params: Promise<{ id: string }> }) {
  // We must "await" the params in the new version of Next.js
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Get data for this specific pattern from Supabase
  const { data: pattern } = await supabase
    .from('patterns')
    .select('*')
    .eq('order_no', id)
    .single();

  if (!pattern) {
    return (
      <div className="p-20 text-center">
        <p>መረጃው አልተገኘም (No Data Found)</p>
        <Link href="/" className="text-red-600 underline">ወደ ዋና ገጽ ተመለስ</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-red-800 p-4 text-white flex items-center">
        <Link href="/" className="mr-4 bg-red-900 px-3 py-1 rounded">← ተመለስ</Link>
        <h1 className="text-xl font-bold">{pattern.name_en} ({pattern.name_am})</h1>
      </div>

      {/* Split Screen Layout */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
        
        {/* Left: Video */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
          {pattern.video_url ? (
            <iframe 
              className="w-full h-full aspect-video"
              src={pattern.video_url.replace("watch?v=", "embed/")}
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-white">ቪዲዮ አልተገኘም</p>
          )}
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-red-800 mb-4 italic">Technical Description</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{pattern.meaning_am}</p>
          
          <div className="mt-10 p-4 bg-gray-100 rounded-lg border-l-4 border-red-800">
            <p className="font-bold">Moves: {pattern.move_count}</p>
          </div>
        </div>
      </div>
    </main>
  );
}