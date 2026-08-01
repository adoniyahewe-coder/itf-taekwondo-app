import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternsList() {
  const { data: patterns } = await supabase.from('patterns').select('*').order('order_no');

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-black p-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-red-600 font-bold">← BACK</Link>
        <h1 className="text-white font-black uppercase italic">The 24 Patterns</h1>
        <div className="w-10"></div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 gap-4">
        {patterns?.map((p) => (
          <Link key={p.id} href={`/patterns/${p.order_no}`}>
            <div className="border-2 border-gray-100 p-6 rounded-2xl flex justify-between items-center hover:border-red-600 transition-all active:scale-95 shadow-sm">
              <div className="flex items-center">
                <span className="text-3xl font-black text-gray-200 mr-6">{p.order_no}</span>
                <div>
                  <h3 className="text-xl font-bold uppercase">{p.name_en}</h3>
                  <p className="text-red-600 font-medium">{p.name_am}</p>
                </div>
              </div>
              <div className="text-gray-300 font-black">→</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}