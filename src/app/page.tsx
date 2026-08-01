import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 font-sans">
      {/* Premium Logo */}
      <div className="text-center mb-20 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none">
          ITF <span className="text-red-600">ETHIOPIA</span>
        </h1>
        <p className="text-gray-500 font-bold tracking-[0.4em] text-[10px] mt-4 uppercase text-center">World Class Training App</p>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        
        <Link href="/history" className="group bg-[#111] border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-red-700 transition-all duration-500 shadow-2xl active:scale-95">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Evolution</h2>
            <p className="text-gray-500 group-hover:text-red-100 text-xs mt-1">ታሪክ እና እድገት</p>
          </div>
          <span className="text-3xl bg-white/5 p-4 rounded-2xl">📜</span>
        </Link>

        <Link href="/patterns" className="group bg-[#111] border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-red-700 transition-all duration-500 shadow-2xl active:scale-95">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">24 Patterns</h2>
            <p className="text-gray-500 group-hover:text-red-100 text-xs mt-1">የ24ቱ ቱል ዝርዝር</p>
          </div>
          <span className="text-3xl bg-white/5 p-4 rounded-2xl">🥋</span>
        </Link>

        <Link href="/library" className="group bg-[#111] border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-red-700 transition-all duration-500 shadow-2xl active:scale-95">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Library</h2>
            <p className="text-gray-500 group-hover:text-red-100 text-xs mt-1">ቴክኒኮች እና አቋቋም</p>
          </div>
          <span className="text-3xl bg-white/5 p-4 rounded-2xl">👊</span>
        </Link>

      </div>
    </main>
  );
}