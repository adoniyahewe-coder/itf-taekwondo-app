import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternsList() {
  const { data: patterns } = await supabase.from('patterns').select('*').order('order_no');

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-black p-5 text-white flex items-center sticky top-0 z-50">
        <Link href="/" className="bg-red-700 px-4 py-1 rounded font-bold text-xs mr-4">← BACK</Link>
        <h1 className="font-black uppercase italic tracking-widest">The 24 Patterns</h1>
      </nav>

      <div className="max-w-4xl mx-auto p-6 space-y-4">
        {patterns?.map((p) => (
          <Link key={p.id} href={`/patterns/${p.order_no}`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center hover:border-red-600 transition-all group active:bg-gray-50">
              <div className="flex items-center">
                <span className="text-3xl font-black text-gray-100 group-hover:text-red-100 transition-colors mr-6">{p.order_no}</span>
                <div>
                  <h3 className="font-black text-gray-900 uppercase">{p.name_en}</h3>
                  <p className="text-red-600 text-xs font-bold">{p.name_am}</p>
                </div>
              </div>
              <span className="text-gray-300 font-bold">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}