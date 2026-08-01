import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Patterns() {
  const { data: patterns } = await supabase.from('patterns').select('*').order('order_no');

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="p-8 pt-16 flex items-center justify-between">
        <Link href="/" className="text-xs font-black uppercase tracking-widest text-red-600">← Home</Link>
        <h1 className="text-2xl font-black italic uppercase">24 Patterns</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 space-y-3 pb-20">
        {patterns?.map((p) => (
          <Link key={p.id} href={`/patterns/${p.order_no}`}>
            <div className="bg-zinc-900 border border-white/5 p-6 rounded-[2rem] flex justify-between items-center active:bg-zinc-800 transition-all">
              <div className="flex items-center gap-5">
                <span className="text-3xl font-black text-zinc-800 italic">{p.order_no}</span>
                <div>
                  <h3 className="font-black text-lg uppercase leading-none">{p.name_en}</h3>
                  <p className="text-red-600 font-bold text-[10px] mt-1 tracking-widest">{p.name_am}</p>
                </div>
              </div>
              <div className="text-zinc-700">→</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}