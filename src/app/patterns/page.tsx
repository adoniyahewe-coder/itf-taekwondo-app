import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function PatternsPage() {
  const { data: patterns } = await supabase.from('patterns').select('*').order('order_no');

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="bg-black p-5 text-white flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="bg-red-700 px-4 py-1 rounded-lg font-bold text-xs">← HOME</Link>
        <h1 className="font-black italic uppercase tracking-widest">The 24 Patterns</h1>
        <div className="w-10"></div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 space-y-4">
        {patterns?.map((p) => (
          <Link key={p.id} href={`/patterns/${p.order_no}`}>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 flex justify-between items-center hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="flex items-center">
                <span className="text-4xl font-black text-slate-100 group-hover:text-red-100 mr-6 transition-colors">{p.order_no}</span>
                <div>
                  <h3 className="font-black text-slate-900 uppercase text-xl">{p.name_en}</h3>
                  <p className="text-red-600 font-bold text-xs tracking-wider">{p.name_am}</p>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-full group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}