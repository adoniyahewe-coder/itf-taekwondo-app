import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">
          ITF <span className="text-red-600">ETHIOPIA</span>
        </h1>
        <p className="text-red-500 font-bold tracking-[0.3em] text-[10px] mt-2 uppercase text-center">Official Training App</p>
      </div>

      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        <Link href="/history" className="bg-[#1a1a1a] border border-white/5 p-8 rounded-[2rem] flex items-center justify-between hover:bg-red-700 transition-all active:scale-95 shadow-xl">
          <h2 className="text-2xl font-black uppercase">Evolution</h2>
          <span className="text-3xl">📜</span>
        </Link>

        <Link href="/patterns" className="bg-[#1a1a1a] border border-white/5 p-8 rounded-[2rem] flex items-center justify-between hover:bg-red-700 transition-all active:scale-95 shadow-xl">
          <h2 className="text-2xl font-black uppercase">Patterns</h2>
          <span className="text-3xl">🥋</span>
        </Link>

        <Link href="/library" className="bg-[#1a1a1a] border border-white/5 p-8 rounded-[2rem] flex items-center justify-between hover:bg-red-700 transition-all active:scale-95 shadow-xl">
          <h2 className="text-2xl font-black uppercase">Library</h2>
          <span className="text-3xl">👊</span>
        </Link>
      </div>
    </main>
  );
}