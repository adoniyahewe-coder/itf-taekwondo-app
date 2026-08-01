import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Home() {
  const { data: patterns } = await supabase.from('patterns').select('*').order('order_no', { ascending: true });

  return (
    <main className="min-h-screen bg-white">
      {/* Premium Header */}
      <header className="bg-black text-white py-14 px-6 text-center border-b-8 border-red-700">
        <h1 className="text-5xl font-black tracking-tighter italic">ITF ETHIOPIA</h1>
        <p className="mt-2 text-red-500 font-bold tracking-widest uppercase text-sm">Official Technical Portal</p>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 mb-12">
           <Link href="#history" className="bg-white p-6 rounded-xl shadow-xl border-b-4 border-red-700 hover:scale-105 transition-all text-center">
             <span className="text-2xl block mb-2">📜</span>
             <h3 className="font-bold">Evolution (ታሪክ)</h3>
           </Link>
           <Link href="/library" className="bg-white p-6 rounded-xl shadow-xl border-b-4 border-black hover:scale-105 transition-all text-center">
             <span className="text-2xl block mb-2">🥋</span>
             <h3 className="font-bold">Library (ቴክኒኮች)</h3>
           </Link>
           <Link href="#patterns" className="bg-white p-6 rounded-xl shadow-xl border-b-4 border-red-700 hover:scale-105 transition-all text-center">
             <span className="text-2xl block mb-2">👊</span>
             <h3 className="font-bold">24 Patterns (ቱል)</h3>
           </Link>
        </div>

        {/* History Section */}
        <section id="history" className="mb-16 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h2 className="text-3xl font-black text-black mb-6 uppercase">ITF Evolution</h2>
          <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-red-700 pl-4">
            "ቴኳንዶ ማለት በእግር መምታት (Tae)፣ በቡጢ መምታት (Kwon) እና የጥበብ መንገድ (Do) ማለት ነው።"
          </p>
          <p className="mt-4 text-gray-600">
            ዘመናዊው አይ.ቲ.ኤፍ (ITF) ቴኳንዶ በ1955 ዓ.ም በጄነራል ቾይ ሆንግ ሂ የተመሰረተ ሲሆን... (Add more history here)
          </p>
        </section>

        {/* Patterns List */}
        <section id="patterns">
          <h2 className="text-3xl font-black mb-8 uppercase text-center">The 24 Patterns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {patterns?.map((p) => (
              <Link key={p.id} href={`/patterns/${p.order_no}`}>
                <div className="group bg-white border border-gray-200 p-5 rounded-lg hover:bg-black hover:text-white transition-all cursor-pointer">
                  <div className="flex justify-between items-center">
                    <span className="text-4xl font-black opacity-10 group-hover:opacity-100 transition-opacity">{p.order_no}</span>
                    <div className="text-right">
                      <h4 className="font-bold uppercase tracking-tighter">{p.name_en}</h4>
                      <p className="text-xs text-red-600 font-bold">{p.name_am}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}