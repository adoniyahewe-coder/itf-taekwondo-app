import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternsGrid() {
  const { data: patterns } = await supabase.from('patterns').select('*').order('order_no');

  return (
    <main className="min-h-screen bg-white">
      <nav className="p-6 flex justify-between items-center border-b shadow-sm sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <Link href="/" className="font-black text-2xl tracking-tighter italic">ITF <span className="text-red-700">ETHIOPIA</span></Link>
        <Link href="/library" className="text-xs font-bold uppercase tracking-widest border-b-2 border-red-700">Technical Library</Link>
      </nav>

      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-5xl font-black italic mb-2 uppercase tracking-tighter">The 24 Patterns</h2>
        <p className="text-gray-400 mb-12 font-medium tracking-[0.2em]">የ24ቱ ቱል ሙሉ ዝርዝር</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {patterns?.map((p) => (
            <Link key={p.id} href={`/patterns/${p.order_no}`}>
              <div className="group relative bg-black h-64 rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <div className="absolute inset-0 bg-red-900 opacity-20 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <span className="text-6xl font-black opacity-20 group-hover:opacity-100 transition-all mb-2">{p.order_no}</span>
                  <h4 className="text-2xl font-black uppercase leading-none">{p.name_en}</h4>
                  <p className="text-red-500 font-bold text-sm mt-2">{p.name_am}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}