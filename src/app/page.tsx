import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Cinematic Logo */}
      <div className="text-center mb-20 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
          ITF <span className="text-red-600">ETHIOPIA</span>
        </h1>
        <p className="text-red-500 font-bold tracking-[0.5em] text-[10px] mt-4 uppercase">The Art of Self Defense</p>
      </div>

      {/* App Menu */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        
        <Link href="/history" className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-red-700 transition-all duration-500 shadow-2xl">
          <div className="flex flex-col text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Evolution</h2>
            <p className="text-gray-400 text-xs mt-1">ታሪክ እና እድገት</p>
          </div>
          <span className="text-3xl">📜</span>
        </Link>

        <Link href="/patterns" className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-red-700 transition-all duration-500 shadow-2xl">
          <div className="flex flex-col text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">24 Patterns</h2>
            <p className="text-gray-400 text-xs mt-1">የ24ቱ ቱል ዝርዝር</p>
          </div>
          <span className="text-3xl">🥋</span>
        </Link>

        <Link href="/library" className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-red-700 transition-all duration-500 shadow-2xl">
          <div className="flex flex-col text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Library</h2>
            <p className="text-gray-400 text-xs mt-1">ቴክኒኮች እና አቋቋም</p>
          </div>
          <span className="text-3xl">👊</span>
        </Link>

      </div>
    </main>
  );
}