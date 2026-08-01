import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternsApp() {
  const { data: patterns } = await supabase.from('patterns').select('*').order('order_no');

  return (
    <main className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* App Header */}
      <header className="bg-black p-6 pt-12 text-white flex items-center justify-between">
        <Link href="/" className="bg-red-700 px-4 py-2 rounded-2xl font-bold text-xs">← HOME</Link>
        <h1 className="font-black italic uppercase tracking-widest">Patterns</h1>
        <div className="w-10"></div>
      </header>

      {/* Scrollable List Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-10">
        {patterns?.map((p) => (
          <Link key={p.id} href={`/patterns/${p.order_no}`}>
            <div className="bg-zinc-50 p-6 rounded-[2rem] border border-zinc-200 flex justify-between items-center active:bg-red-50 active:border-red-500 transition-colors">
              <div className="flex items-center">
                <span className="text-4xl font-black text-zinc-200 mr-5 tracking-tighter">{p.order_no}</span>
                <div>
                  <h3 className="font-black text-zinc-900 uppercase text-lg leading-none">{p.name_en}</h3>
                  <p className="text-red-600 font-bold text-[10px] mt-1 uppercase tracking-widest">{p.name_am}</p>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-300">→</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}